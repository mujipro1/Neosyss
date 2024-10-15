import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogCardDetails.css';

const BlogCardDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchBlogData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogs/' + id);
                const data = await response.json();
                if (isMounted) {
                    setBlog(data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Failed to fetch blog data:", error);
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchBlogData();

        return () => {
            isMounted = false;
        };
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const arrayBufferToBase64 = (buffer) => {
        const binary = buffer.reduce((data, byte) => data + String.fromCharCode(byte), '');
        return window.btoa(binary);
    };

    const imageSrc = blog.image && blog.image.data ? `data:image/png;base64,${arrayBufferToBase64(blog.image.data)}` : '';

    // Function to add class to all heading tags (h1, h2, h3, etc.)
    const addClassToHeadings = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6, strong'); // Select all heading tags

        headings.forEach((heading) => {
            heading.classList.add('head-highlight'); // Add the class
        });

        return doc.body.innerHTML; // Return the modified HTML
    };

    // Sanitize and modify the blog description before rendering
    const modifiedDescription = addClassToHeadings(blog.description);

    return (
        <div className="my-5 main-section-blog">
            <div className="blog-det-img-cont">
                <img src={imageSrc} className="blog-det-img" alt={blog.title} />
            </div>
            <h1 className="mt-5 blog-det-title fw-bold">{blog.title}</h1>
            <div className="d-flex blog-det-subhead justify-content-start">
                <div style={{ marginRight: '10px' }}> {new Date(blog.date).toLocaleDateString('en-GB', {
                day:'2-digit', month:'long', year:'numeric',})}</div>
                -
                <div className="mx-2">{blog.subheading}</div>
            </div>
            <div className="my-3 mt-5 pt-4 blog-det-description" dangerouslySetInnerHTML={{ __html: modifiedDescription }} />
            <h3 className="mx-2 mb-5 head-highlight">{blog.hashtags}</h3>

        </div>
    );
};

export default BlogCardDetails;
