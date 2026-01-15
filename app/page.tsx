'use client'
import {  programmingBlogs } from "@/store/stoire";
import BlogCard from "@/components/UI/BlogCard";
import { BlogMap, getRandomBlog, routes } from "@/constants/constants";
import { blob } from "stream/consumers";
import BlogCard_Category from "@/components/UI/BlogCard_Category";
import HomeLayout from "@/components/UI/HomeLayout";
import BlogHeroCard from "@/components/UI/BlogCard_flex";
import BlogCard_Sec3 from "@/components/UI/BlogCard_Sec3";
import { useState } from "react";

export default function Home() {
     const[page,setpage]=useState({
      initial:0,
      final:7
     })
  return (
    <div className=" items-center justify-center overflow-x-hidden flex flex-col mt-10 ">
      <div className="w-full  space-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1   mb-30 px-5 lg:px-15">
        {routes.slice(1,2).map((route, idx) => (
          <div className=" w-full flex flex-col " key={idx}>
            <HomeLayout
              id={idx}
              route={route}
            />
          </div>
        ))}
      </div>

      <div className="grid w-full mb-20  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-15">
        {programmingBlogs.slice(1).map((blog, idx) => (
        
           <BlogCard_Category
            blog={blog}
            path="programming"
           isHerosection={true}
           />
        
        ))}
      </div>
    
      <div className="bg-black w-full flex-col flex px-5 lg:px-15">
 <span className="w-full text-red-400 text-start p-2 mt-4 mb-2 text-4xl font-bold">Must Reads</span>
        <div className="grid w-full grid-rows-2 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 mb-4">
        
        
        {getRandomBlog(8).sort((a,b)=>a.author.localeCompare(b.author)).map((blog, idx) => (
        
           <BlogCard_Category
            blog={blog}
            path={blog.type}
            key={idx}
           isHerosection={false}
           />
        
        ))}
      </div>
      </div>


       <div className="pt-10 h-full text-gray-900 px-5 lg:px-16 flex flex-col lg:flex-row w-full relative">


  <div className="lg:w-2/3 mt-6">
    <div className="flex flex-col items-center">
      <div className="w-full grid grid-cols-1 gap-6">
        {BlogMap["programming"].slice(page.initial, page.final).map((blog) => (
          <BlogHeroCard
            key={blog.slug}
            blog={blog}
            path={blog.type}
          />
        ))}
      </div>

      <button
        className="cursor-pointer w-90 mt-4 px-8 mb-20 rounded bg-blue-400 text-white p-2"
        onClick={() =>
          setpage({
            initial: page.initial,
            final:
              BlogMap["ai"].length > page.final + 5
                ? page.final + 5
                : BlogMap["ai"].length,
          })
        }
      >
        Load More
      </button>
    </div>
  </div>

  <div className="lg:w-1/3 lg:pl-8 sticky top-24 self-start lg:self-stretch">
    <div className="sticky top-24">
      <h2 className="text-3xl font-bold text-[#2360BF] mb-6">
        You may also like!
      </h2>

      <div className="flex flex-col gap-3">
        {BlogMap["programming"]?.map((blog) => (
          <BlogCard_Sec3
            key={blog.slug}
            blog={blog}
            path={blog.type}
          />
        ))}
      </div>
    </div>
  </div>

</div>

          </div>
  );
}
