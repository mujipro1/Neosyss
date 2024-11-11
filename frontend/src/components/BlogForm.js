import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/BlogForm.css";
import HoverButtonStatic from './Utilities/HoverButtonStatic';
import ReactQuill from 'react-quill'; // Import React Quill
import 'react-quill/dist/quill.snow.css'; // Import styles for React Quill

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); // Rich text editor field
    const [hashtags, setHashtags] = useState('');
    const [subheading, setSubheading] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
    const [editingBlogId, setEditingBlogId] = useState(null); // To track if editing a blog
    const [blogData, setBlogs] = useState([]); // For displaying blogs
    const [confirmDelete, setConfirmDelete] = useState(null); // To track blog being deleted

    // Fetch blogs on component mount
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('api/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setError('Please upload a valid image file (jpg or png)');
                setImage(null);
            } else {
                setError('');
                setImage(file);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        // Manual validation for required fields
        if (!title || !subheading || !hashtags || !description) {
            setError('All fields are required. Please fill them out.');
            return; // Stop the submission if fields are empty
        }
    
        if (!image && !editingBlogId) {
            setError('Please upload an image');
            return;
        }
        const formData = new FormData();
        formData.append('title',  title);
        formData.append('description',  description);
        formData.append('hashtags',  hashtags);
        formData.append('subheading',  subheading);
        formData.append('image', image);
        try {
            // Use a different API for edit vs create
            if (editingBlogId) {
                formData.append('blogId', editingBlogId);
                const response = await axios.post('api/edit-blog', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Important for file uploads
                    },
                });
                if (response.status === 200) {
                    resetForm();
                    setIsSubmitted(true);
                }
            } else {
                const response = await axios.post('api/create-blog', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Important for file uploads
                    },
                });
                if (response.status === 201) {
                    resetForm();
                    setIsSubmitted(true);
                }
            }
            fetchBlogs(); // Refresh blog list
        } catch (error) {
            console.error('Error submitting blog:', error);
        }
    };
    
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('api/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setHashtags('');
        setSubheading('');
        setImage(null);
        setEditingBlogId(null);
        setError('');
    };

    const handleEdit = (blog) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsSubmitted(false);
        setTitle(blog.title);
        setDescription(blog.description);
        setHashtags(blog.hashtags);
        setSubheading(blog.subheading);
        setEditingBlogId(blog.id); // Set blog id for editing
    };

    const handleDelete = async () => {
        if (confirmDelete) {
            try {
                // For delete, use POST with blog id
                await axios.post('api/delete-blog', { blogId: confirmDelete });
                fetchBlogs(); // Refresh blog list
                setConfirmDelete(null); // Reset delete confirmation
            } catch (error) {
                console.error('Error deleting blog:', error);
            }
        }
    };

    return (
        <div className="blog-form-container row p-5">
            {isSubmitted ? (
                
                <div className="col-md-6 ">
                    <div className="col-md-12 mt-5 d-flex justify-content-center head-blog-fill px-5 pt-2">
                        <h2 className='blog-post-heading'>Form <span className='head-highlight'>Submitted</span>.</h2>
                    </div>
                    <div className=" row py-5 blog-form-cont">
                        <div className="thank-you-message text-center">
                            <h1 className='head-highlight fw-bold'>Thank You!</h1>
                            <p className='text-grey-sec'>Your message has been received. We will reach out to you shortly.</p>
                            <div className="mx-2 mt-5">
                                Submit Another Response
                            </div>
                            <div className="d-flex justify-content-center">
                                <HoverButtonStatic text={'Submit'} clickEvent={() => setIsSubmitted(false)} mode={'dark'} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="col-md-12 d-flex justify-content-center head-blog-fill px-5 pt-4">
                        <h2 className='blog-post-heading'>{editingBlogId ? 'Edit' : 'Create'} <span className='head-highlight'>Blog</span> Post<span className='head-highlight'>.</span></h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className=" row py-5 blog-form-cont">
                            <div className="col-md-4">
                                <div className="mb-3 mt-2">
                                    <h2>Enter <span className="head-highlight mb-3 fw-bold">Blog</span> Details
                                        <span className="head-highlight fw-bold">.</span></h2>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="blog-post-label">Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subheading" className="blog-post-label">Subheading</label>
                                    <input type="text" className="form-control" value={subheading} onChange={(e) => setSubheading(e.target.value)} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="hashtags" className="blog-post-label">#Hashtags</label>
                                    <textarea className="form-control" required rows={1} value={hashtags} onChange={(e) => setHashtags(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3 react-quill-cont">
                                    <label htmlFor="description" className="blog-post-label">Description</label>
                                    <ReactQuill theme="snow" value={description} onChange={setDescription} className='react-quill' required/>
                                </div>
                                <div className="mb-3">
                                    <input type="file" className="form-control" onChange={handleImageChange} required/>
                                    {error && <div className="text-danger mt-2">{error}</div>}
                                </div>
                            </div>
                            <div className="d-flex blogpost-btn-cont justify-content-center mt-2">
                                <HoverButtonStatic text={editingBlogId ? 'Save' : 'Post'} mode={'dark'} clickEvent={handleSubmit} />
                            </div>
                        </div>
                    </form>
                </>
            )}

            <div className="col-md-12 mt-5 d-flex justify-content-center head-blog-fill px-5 pt-2">
                <h2 className='blog-post-heading'>Manage <span className='head-highlight'>Blogs</span>.</h2>
            </div>

            <div className="col-md-9">
                <div className="row py-5 blog-form-cont">
                    {blogData.map((blog) => (
                        <div className="row pb-3 px-3" key={blog.id}>
                            <div className="col-md-8">
                                <h3 className='head-highlight'>{blog.title}</h3>
                                <div>{blog.subheading}</div>
                                <div>{blog.date}</div>
                                <hr className='my-4' />
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <HoverButtonStatic text="Edit" mode="dark" clickEvent={() => handleEdit(blog)} />
                                <HoverButtonStatic text="Delete" mode="light" clickEvent={() => setConfirmDelete(blog.id)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Confirmation Modal for Delete */}
            {confirmDelete && (
                <div className="delete-confirmation">
                    <div className="confirmation-box">
                        <p>Are you sure you want to delete this blog?</p>
                        <div className="confirmation-buttons">
                            <HoverButtonStatic text="Yes" mode="dark" clickEvent={handleDelete} />
                            <HoverButtonStatic text="No" mode="light" clickEvent={() => setConfirmDelete(null)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogForm;
