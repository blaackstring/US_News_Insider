import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '@/store/stoire';
import BreadcrumbsUi from './SmallUiComponets/BreadcrumbsUi';



const BlogPostLayout = ({ blog }:{blog: Blog}) => {
    return (
   <div className='w-full px-5 lg:px-15'>
<BreadcrumbsUi blog={blog}/>
         <article className="min-h-screen bg-white  mt-7">
            <div className="">

       <div className="lg:mb-5 mb-4 relative h-75 w-full md:h-100 md:w-150 lg:w-225 lg:h-125  shadow-lg">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <header className="mb-4 lg:mb-10 w-full lg:w-2/3">
                    <h1 className="  font-bold tracking-wide text-gray-900 mb-6">
                        {blog.title}
                    </h1>
              

                    <div className="flex flex-row items-center justify-between p  border-gray-100 ">
                          <div className="flex items-center gap-2 flex-row w-fit">
    
     <div className="w-12 h-12 rounded-full bg-gray-400 gap-2 flex items-center justify-center font-semibold">
            {blog.author.charAt(0)}
          </div>

          <span className="font-medium text-sm p-1 text-gray-600">
            By {blog.author}
          </span></div>

          <div>
            <span className="font-medium text-gray-600 text-sm px-8">
            <span>01 Jan 2026</span>
          </span>
          </div>
                    </div>
                </header>


                <div className="lg:w-2/3 font-serif leading-relaxed text-gray-800 line-clamp-7 tracking-wider">
                    {blog.content.map((paragraph, index) => (
                        <p key={index} className="mb-6 first:first-letter:text-4xl first:first-letter:font-bold first:first-letter:text-gray-900 first:first-letter:mr-3 first:first-letter:float-left inline text-lg font-sans">
                            {paragraph}
                        </p>
                    ))}
                </div>

            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between">
                    <Link href="/" className="text-blue-600 hover:underline">
                        &larr; Back to Home
                    </Link>
                </div>

            </div>
        </article>
   </div>
    );
};

export default BlogPostLayout;
