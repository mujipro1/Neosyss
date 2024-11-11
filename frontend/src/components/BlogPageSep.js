import axios from 'axios';
import Loading from './Utilities/Loading';
import BlogCard from './HomePage/BlogCard';
import React, { useEffect, useState } from 'react';

const BlogPageSep = () => {
  const [blogData, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs. Please try again later.');
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return <Loading />; // Render a loading state
  }

  if (error) {
    return <div>{error}</div>; // Render the error message
  }

  return (
    <div className="blogs-container row m-0">
      <div className="bloghead mt-5 p-5">
        <h1 className="mx-4">
          <span className="head-highlight">Blogs</span> & Articles.
        </h1>
      </div> 

      <div className="row">
        {blogData.map((blog) => (
          <div className="col-md-6  pb-3 px-3" key={blog.id}> {/* Use a unique identifier */}
            <BlogCard blog={blog} type={'small'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPageSep;
