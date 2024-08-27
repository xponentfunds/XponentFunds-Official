import React from "react";
import BlogCard from "./Blog";
import { blogs } from "./Blogdata";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Insights and Updates | Our Blog</title>
        <meta
          name="description"
          content="Explore our blog for the latest insights, updates, and expert opinions on various topics. Stay informed with in-depth articles, industry news, and tips to help you stay ahead. Read our latest posts and join the conversation!"
        />
        <meta
          name="keywords"
          content="blog, latest insights, industry updates, expert opinions, articles, news, tips"
        />
      </Helmet>
      <div className="bg-black py-20 md:py-28 px-5 md:px-6 lg:px-10">
        <div className="container mx-auto ">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-5 md:gap-10">
              <Link to={`/blog/${blog.id}`}>
                <BlogCard blog={blog} />
              </Link>
              {/* <BlogCard blog={blog} /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
