import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row  bg-[#201E1E] shadow-md rounded-lg p-4  mt-5 md:mt-10">
      <span className="w-full  md:w-1/3">
        <LazyLoadImage
          src={blog.image}
          alt={blog.title}
          className="h-48 md:h-auto w-full  rounded-lg object-cover mx-auto"
          PlaceholderSrc={blog.PlaceholderImg}
          effect="blur"
          wrapperClassName ="blogcss"
        />
      </span>

      <div className="md:ml-4 flex flex-col justify-between md:w-2/3">
        <div>
          <div className="flex items-center  text-white mb-2 font-poppins text-xs md:text-sm lg:text-base">
            <LazyLoadImage
              src={blog.authorIcon}
              alt={blog.author}
              className="w-6 h-6 rounded-full"
                effect="blur"
            />
            <span className="ml-2">{blog.author}</span>
            <span className="ml-4">{blog.date}</span>
            {/* <span className="ml-2">· {blog.time}</span> */}
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl  font-Title text-white mb-2">
            {blog.title}
          </h2>
          <p className="text-white font-poppins md:text-lg lg:text-xl">
            {blog.description}
          </p>
        </div>
        <div className="flex items-center text-white font-poppins mt-4 text-xs md:text-sm lg:text-base">
          <span>{blog.views} views</span>
          <span className="ml-4">{blog.comments} comments</span>
          <span className="ml-auto flex items-center">
            <span>{blog.likes}</span>
            <span className="ml-1">❤️</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
