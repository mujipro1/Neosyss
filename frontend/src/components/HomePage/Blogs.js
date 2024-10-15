import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LoadingSkeleton from "../Utilities/LoadingSkeleton"; // Import the LoadingSkeleton
import "../../styles/Blogs.css"; // You can add styles here for layout
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import HoverButtonStatic from "../Utilities/HoverButtonStatic";

const Blogs = () => {
  const [blogData, setBlogs] = useState([]);
  const [isMounted, setIsMounted] = useState(true); // Track the mounted state
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");

        if (isMounted) {
          // if (response.data.length >= 4){
          // }
          setLoading(false);
          setBlogs(response.data.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchBlogs();

    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="blogs-container row m-0">
      <div className="bloghead mt-5 ">
        <h1 className="">
          <span className="head-highlight">Blogs</span> & Articles.
        </h1>
        <p className="blog-para-x">
          Empower yourself with knowledge. Our blogs & articles are your go-to
          resource for valuable insights, practical advice on software
          development, and other industry-relevant information. Our articles are
          written by experienced professionals who share their expertise and
          experience to help you succeed in your projects.
        </p>
      </div>
      <div className="blog-main-c">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {isDesktop && (
              <>
                <div className="row">
                  <div className="col-md-7">
                    <BlogCard blog={blogData[0]} type="large" />
                  </div>
                  <div className="col-md-5">
                    <BlogCard blog={blogData[1]} type="small" />
                    <BlogCard blog={blogData[2]} type="small" />
                    <BlogCard blog={blogData[3]} type="small" />
                  </div>
                </div>
              </>
            )}
            {isMobile && (
              <div className="right-section p-3">
                <BlogCard blog={blogData[0]} type="small" />
                <BlogCard blog={blogData[1]} type="small" />
                <BlogCard blog={blogData[2]} type="small" />
                <BlogCard blog={blogData[3]} type="small" />
              </div>
            )}

            <div className="row my-5 ">
              <div className="col-md-12 mb-5 d-flex justify-content-center">
                {/* <button
            className="btn view-all-button"
            onClick={() => navigate('/blogs/all')}
          >
            View All...
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="view-all-svg"
              data-name="Layer 1"
              viewBox="0 0 24 24">
              <path d="M19.5,0H10.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h8.379L.439,21.439c-.586,.585-.586,1.536,0,2.121,.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439L21,5.121V13.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V4.5c0-2.481-2.019-4.5-4.5-4.5Z" />
            </svg>
          </button> */}

                <HoverButtonStatic
                  text="View All"
                  mode="dark"
                  clickEvent={() => navigate("/blogs/all")}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
