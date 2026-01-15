import { Blog } from "@/store/stoire";
import Image from "next/image";
import Link from "next/link";


export default function BlogCard_Sec3({
  blog,
  path,
}: {
  blog: Blog;
  path: string;
}) {
  return (
<div className="w-full">
        <Link
      href={`${path}/${blog.slug}`}
      className="group flex flex-col md:flex-row bg-white overflow-hidden  transition"
    >

      <div className="relative min-w-50 min-h-50">

        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="  px-2 flex flex-col justify-between">
      
    
          <h2 className="text-lg w-full font-bold  group-hover:underline">
            {blog.content[0].slice(0,60)}...
          </h2>
        

        
      </div>
    </Link>
    
</div>
  );
}
