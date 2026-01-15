import { routes } from '@/constants/constants';
import { Blog } from '@/store/stoire';
import Image from 'next/image';
import Link from 'next/link';


type Pageprops = {

    blog: Blog
    path: string
}

const BlogCard = ({ blog, path }: Pageprops) => {

    const { title, desc, author, imageUrl, slug } = blog;


    return (
        <Link href={`${path}/${slug}`} className="group block ">
            <div className="w-full   overflow-hidden  h-full  ">
                <div className="relative w-95  lg:w-full lg:aspect-auto h-64 lg:h-120 overflow-hidden ">
                    <span className={`absolute top-2 left-2 text-white z-20 text-md  bg-[#2360BF] rounded-r-md px-2`}>{path.includes('/') ? path.slice(1).toUpperCase() : path.toUpperCase().slice(0, 1)+path.slice(1)}</span>
                    <Image

                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-900"
                    />
                </div>
                <div className="mt-2 flex flex-col justify-center ">
                    <h1 className="lg:text-3xl text-3xl  font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {title}
                    </h1>
                    <div className="mt-auto  border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                        <span className="text-md font-medium text-gray-500 dark:text-gray-500">
                            By {author}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                            Read More &rarr;
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
