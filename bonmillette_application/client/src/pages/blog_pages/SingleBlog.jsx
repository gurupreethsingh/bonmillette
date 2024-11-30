import React from "react";
import { useLocation } from "react-router-dom";

const SingleBlog = () => {
  const { state } = useLocation();

  if (!state) {
    return <h2>Blog not found</h2>;
  }

  const { image, date, title, content, author } = state;

  // Process the content to split paragraphs and handle subheadings
  const processedContent = content
    .trim()
    .split("\n\n") // Splitting by double line breaks for paragraphs
    .map((paragraph, index) => {
      const isSubheading = paragraph.trim().startsWith("<strong>");
      if (isSubheading) {
        // Extract subheading and its text
        const subheadingMatch = paragraph.match(/<strong>(.*?)<\/strong>/);
        const subheadingText = subheadingMatch ? subheadingMatch[1] : "";
        const paragraphText = paragraph
          .replace(/<strong>.*?<\/strong>/, "")
          .trim();
        return (
          <div key={index} className="mb-6">
            <p className="text-3xl font-bold mb-2">{subheadingText}</p>
            <p className="text-xl font-medium leading-relaxed">
              {paragraphText}
            </p>
          </div>
        );
      }
      return (
        <p
          key={index}
          className="mb-6 text-xl font-medium leading-relaxed"
          dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
        />
      );
    });

  return (
    <div className="w-full md:w-3/4 mx-auto pt-5 pb-5">
      <div className="col">
        <div className="card h-100 border-0">
          {/* Custom image size for SingleBlog */}
          <img
            src={image}
            className="rounded-5 transition-shadow duration-300 hover:shadow-2xl w-full md:w-1/2 mx-auto"
            alt="Blog Thumbnail"
          />
          <div className="card-body">
            {/* Date with updated size */}
            <p className="card-title text-2xl font-light text-red-500 mb-4">
              {date} <span className="text-gray-700 font-light">{author}</span>
            </p>
            {/* Title with increased size */}
            <p className="card-title text-4xl font-bold mb-6">{title}</p>
            {/* Content */}
            <div className="card-text">{processedContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
