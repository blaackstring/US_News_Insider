import Link from 'next/link'
import React from 'react'

const BreadcrumbsUi = ({ blog,category }: { blog?: any,category?:string }) => {
  return (
    <div>
           <div className="w-content flex flex-row gap-2 tracking-wider max-w-fit mt-10 text-xs text-gray-600">
    <Link href={'/'} className="bg-[#E5E7EB] rounded px-2 p-1 text-center w-fit ">Home</Link>
  {blog.type?<Link href={blog?.type??'/'}  className="bg-[#E5E7EB] rounded px-2 p-1 text-center w-fit ">{blog?.type?.charAt(0).toUpperCase() + blog?.type?.slice(1)}</Link>:
  <Link className={"bg-[#E5E7EB] rounded px-2 p-1 text-center w-fit "} href={ `/${category??'/'}`}>{category!.charAt(0).toUpperCase() + category?.slice(1)}
  
  </Link>} 
{ blog.slug && <Link href={blog?.slug??'/'}  className="bg-[#E5E7EB] rounded px-2 p-1 text-center w-fit ">{blog?.slug?.charAt(0).toUpperCase() + blog?.slug?.slice(1)}</Link>  
}
   </div>
    </div>
  )
}

export default BreadcrumbsUi
