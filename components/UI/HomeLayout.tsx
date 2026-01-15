import Link from "next/link";

import { BlogMap, routes, Routes, } from "@/constants/constants";
import BlogCard from "./BlogCard";
import BlogCard_Category from "./BlogCard_Category";


export default function HomeLayout({ route, id }: { route: Routes, id: number }) {

  return (
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          {BlogMap['technology']?.slice(0, 1)?.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              path={route.href.split('/')[route.href.split('/').length - 1]}
            />
          ))}
        </div>

       
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3 content-start">
          {BlogMap['technology']
            ?.slice(1, 5) 
            .map((b) => {
              return (
                <BlogCard_Category
                  key={b.slug}
                  blog={b}
                  path={'technology'}
                  isHerosection={true}
                />
              )
            })
          }
        </div>

      </div>

  );
}
