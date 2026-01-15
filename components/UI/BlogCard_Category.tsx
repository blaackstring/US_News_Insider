import { routes } from "@/constants/constants";
import { Blog } from "@/store/stoire";
import Image from "next/image";
import Link from "next/link";

type Pageprops = {
  blog: Blog;
  path: string;
  isHerosection: boolean;
};
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const formattedDate = `${day}/${month}/${year}`;

const BlogCard_Category = ({ blog, path, isHerosection }: Pageprops) => {
  const { title, imageUrl, slug } = blog;
  console.log(blog);
  const svg = (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Link
      href={`${`/${path}`}/${slug}`}
      className="group block  w-full 
       h-fit mb-2"
    >
      <div className="w-full overflow-hidden font-semibold tracking-wide  duration-300 h-full flex flex-col">
        <div
          className={`relative w-full   aspect-video overflow-hidden ${isHerosection ? "h-53" : "h-70"}`}
        >
          <span
            className={`absolute top-2 left-2 ${isHerosection ? "bg-blue-600" : "text-white bg-[#2360BF] "}  text-white z-2 font-normal  text-xs  rounded px-2 py-1`}
          >
            {path.includes("/")
              ? path.slice(1)
              : path.charAt(0).toUpperCase() + path.slice(1)}
          </span>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className=" flex flex-col  ">
          <h1
            className={`   pt-5 group-hover:text-blue-400  transition-colors line-clamp-4 ${isHerosection ? " text-black" : " text-white"}`}
          >
            {title}
          </h1>

          <div className="flex items-center justify-between border-gray-100 group">
            <div
              className={`flex items-center gap-1 justify-start text-md font-medium ${
                isHerosection
                  ? "text-gray-400 dark:text-gray-700"
                  : "text-gray-400 dark:text-gray-200"
              }`}
            >
              <span className="">{svg}</span>
              <span>{formattedDate}</span>
            </div>
            <span
              className="text-blue-600 dark:text-blue-400 text-sm font-medium
    opacity-0 group-hover:opacity-100
    transition-all duration-300
    group-hover:translate-x-0"
            >
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard_Category;
