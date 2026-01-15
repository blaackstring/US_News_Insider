import { Blog } from "@/store/stoire";
import Image from "next/image";
import Link from "next/link";


export default function BlogHeroCard({
  blog,
  path,
}: {
  blog: Blog;
  path: string;
}) {
    const date=new Date()
    const day=date.getDate()
    const month=date.getMonth()+1
    const year=date.getFullYear()
    const formattedDate=`${day}/${month}/${year}`
  return (
<div className="">
        <Link
      href={`${path}/${blog.slug}`}
      className="group flex flex-col  md:flex-row bg-white overflow-hidden  transition"
    >

      <div className="relative w-1/2 h-60 sm:h-50 md:h-auto">

        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className=" md:w-1/2 px-3 flex flex-col justify-between">
      
        <div className="relative">
                                <span className={`  text-white z-20  text-sm bg-red-400 rounded px-4 mb-4 inline-block py-1` }>{path.includes('/')?path.slice(1):path.charAt(0).toUpperCase() + path.slice(1)}</span>
          <h2 className=" font-bold  group-hover:underline">
            {blog.title}
          </h2>

        </div>
            <div className=" flex flex-col mt-4 mb-4">
            {
                <span  className="inline">
                   {`${blog.content.map((v,i)=>v.slice(0,15)).join(' ')}...`}
                </span>    
            }
          </div>

        <div className=" flex items-center mb-10 justify-between text-sm text-gray-500 flex-row">
     <div className="flex items-center gap-2 flex-row w-fit">
    
     <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center font-semibold">
            {blog.author.charAt(0)}
          </div>

          <span className="font-medium text-gray-600">
            By {blog.author}
          </span></div>
<div className="flex items-center gap-2 flex-row w-fit">
      <span className={ 'text-md font-medium text-gray-400 dark:text-gray-500'}>
                            {formattedDate} | 5 min read
                        </span>
</div>
        </div>
        
      </div>
    </Link>
    
</div>
  );
}
