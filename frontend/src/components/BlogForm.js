import React, { useState } from 'react';
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        
        // Validate file type
        if (file) {
            const validTypes = ['image/jpeg', 'image/png'];
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
        e.preventDefault();
        
        if (!image) return; // Prevent submission if no valid image
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description); // Pass the rich text description
        formData.append('hashtags', hashtags);
        formData.append('subheading', subheading);
        formData.append('image', image);

        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                setTitle('');
                setDescription(''); // Reset the Quill editor as well
                setHashtags('');
                setSubheading('');
                setImage(null);
                setIsSubmitted(true); // Set the form as submitted
            } else {
                console.error('Error posting blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting blog:', error);
        }
    };

    const handleAnotherResponse = () => {
        // Reset the form and allow another submission
        setIsSubmitted(false);
    };

    return (
        <div className="blog-form-container row p-5">
            {isSubmitted ? (
                <div className="col-md-6 ">
                    <div className=" row py-5 blog-form-cont">
                        <div className="thank-you-message text-center">
                            <h1 className='head-highlight fw-bold'>Thank You!</h1>
                            <p className='text-grey-sec'>Your message has been received. We will reach out to you shortly.</p>
                            <div className="mx-2 mt-5">
                                Submit Another Response
                            </div>
                            <div className="d-flex justify-content-center">
                                <HoverButtonStatic text={'Submit'} clickEvent={handleAnotherResponse} mode={'dark'} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="col-md-12 d-flex justify-content-center head-blog-fill px-5 pt-2">
                        <h2 className='blog-post-heading'>Create <span className='head-highlight'>Blog</span> Post<span className='head-highlight'>.</span></h2>
                    </div>
                    <form>
                        <div className=" row py-5 blog-form-cont">
                            <div className="col-md-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 mt-2">
                                        <h2>Enter <span className="head-highlight mb-3 fw-bold">Blog</span> Details
                                        <span className="head-highlight fw-bold">.</span></h2>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="blog-post-label">Title</label>
                                        <input type="text" className="form-control" value={title}
                                        onChange={(e) => setTitle(e.target.value)} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subheading" className="blog-post-label">Subheading</label>
                                        <input type="text" className="form-control"
                                            value={subheading} onChange={(e) => setSubheading(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="hashtags" className="blog-post-label">#Hashtags</label>
                                        <textarea className="form-control" required rows={1}
                                            value={hashtags} onChange={(e) => setHashtags(e.target.value)} />
                                    </div>
                                    
                                
                                </form>
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3 react-quill-cont">
                                    <label htmlFor="description" className="blog-post-label">Description</label>
                                    <ReactQuill theme="snow" value={description} onChange={setDescription} className='react-quill' />
                                </div>
                                <div className="mb-3">
                                    <input type="file" className="form-control"  
                                    onChange={handleImageChange} required />
                                    {error && <div className="text-danger mt-2">{error}</div>}
                                </div>
                            </div>
                            <div className="d-flex blogpost-btn-cont justify-content-center mt-2">
                                <HoverButtonStatic text="Post" mode={'dark'} clickEvent={handleSubmit} />
                            </div>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default BlogForm;
