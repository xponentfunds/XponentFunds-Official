import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./Blogdata"; // Import your blog data
import { LazyLoadImage } from "react-lazy-load-image-component";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="bg-[#201E1E] py-20 md:py-28 px-5 md:px-0">
      <section className="container mx-auto ">
        <div className=" text-white flex flex-col gap-3 md:gap-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-Title  ">
            {blog.title}
          </h1>
          <p className="text-sm font-poppins font-medium ">
            {blog.author} &bull; {blog.date} &bull; {blog.time} read
          </p>
          <LazyLoadImage
            src={blog.image}
            alt={blog.title}
            className="w-full object-cover md:h-[300px]  xl:h-[400px] "
            placeholderSrc={blog.PlaceholderImg}
          />
          <p className="font-poppins font-medium text-sm  md:text-base lg:text-lg">
            {blog.description}
          </p>
          {/* Add more sections like in the image */}
          <div className="mt-8">
            <p className="font-poppins font-medium text-sm  md:text-base lg:text-lg text-[#C1C1C1]">
              {blog.fullContent}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
