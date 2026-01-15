import BlogHeroCard from "@/components/UI/BlogCard_flex";
import BlogCard_Sec3 from "@/components/UI/BlogCard_Sec3";
import BreadcrumbsUi from "@/components/UI/SmallUiComponets/BreadcrumbsUi";
import { BlogMap } from "@/constants/constants";
import Link from "next/link";

const Page = async ({ params }: { params: { category: string } }) => {
const category=( await params).category;
console.log(category);

  const blogs = BlogMap[category as keyof typeof BlogMap];
  
  return (
 <div className="lg:px-15 px-5 relative  self-start lg:self-stretch">
<BreadcrumbsUi blog={blogs} category={category} />
     <div className=" mx-auto mt-10">
      <h1 className="text-4xl font-bold text-[#2360BF] mb-6">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {blogs?.map((blog) => (
            <BlogHeroCard
              key={blog.slug}
              blog={blog}
              path={blog.type}
            />
          ))}
        </div>
        <div className="w-full lg:w-1/3 sticky top-20">
          <h2 className="text-3xl font-bold text-[#2360BF] mb-6">
            You may also like!
          </h2>

          <div className="flex flex-col gap-3  ">
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
};

export default Page;
