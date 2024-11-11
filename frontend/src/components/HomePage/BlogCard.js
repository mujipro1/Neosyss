import React from 'react';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify'; // To sanitize the HTML content
import '../../styles/BlogCard.css'; // Your styles here

const BlogCard = ({ blog = {}, type }) => {
  const { id, title = '', description = '', date = '', image = null, subheading = '' } = blog || {};
  const navigate = useNavigate();

  // Strip HTML tags and truncate the text for plain text truncation
  const truncateText = (htmlContent, limit) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    const words = plainText.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : plainText;
  };

  const arrayBufferToBase64 = (buffer) => {
    const binary = buffer.reduce((data, byte) => data + String.fromCharCode(byte), '');
    return window.btoa(binary);
  };

  const imageSrc = image && image.data ? `data:image/png;base64,${arrayBufferToBase64(image.data)}` : '';

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const truncatedTitle = truncateText(title, type === 'small' ? 4 : 15);
  const truncatedDescription = truncateText(description, type === 'small' ? 8 : 40);

  // Handle click event to navigate to the blog details page
  const handleCardClick = () => {
    navigate(`/blogs/${id}`);
  };

  // Sanitize the original description to render safely as HTML
  const sanitizedDescription = DOMPurify.sanitize(truncatedDescription);

  return (
    <div
      className={`blog-card my-4 ${type === 'large' ? 'large-card' : 'small-card'}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {type === 'large' ? (
        <div className="blog-large-card">
          {imageSrc && <img src={imageSrc} alt={title} className="blog-image-large" />}
          <div className="blog-text-large">
            <span className="blog-date">{formatDate(date)}</span>
            <h2 className="blog-title-large">{truncatedTitle}</h2>
            <p className="blog-subheading">{subheading}</p>
            {/* Render the sanitized, truncated description as HTML */}
            <p className="blog-description" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            {/* <div className="blog-seemore">See More...</div> */}
          </div>
        </div>
      ) : (
        <div className="blog-small-card ">
          {imageSrc && <img src={imageSrc} alt={title} className="blog-image-small" />}
          <div className="blog-text-small">
            <span className="blog-date">{formatDate(date)}</span>
            <h3 className="blog-title">{truncatedTitle}</h3>
            <div className="blog-subheading">{subheading}</div>
            {/* Render the sanitized, truncated description as HTML */}
            <div className="blog-description" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            <div className="blog-seemore">See More...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
