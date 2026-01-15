import { aiBlogs } from '@/store/stoire';
import BlogPostLayout from '@/components/UI/BlogPostLayout';
import { notFound } from 'next/navigation';
import { BlogMap } from '@/constants/constants';

const Page = async ({ params }: { params: Promise<{category:string, id: string }> }) => {
  const{category, id} = (await params)
  console.log(await params);
  
  const blog = BlogMap[category as keyof typeof BlogMap]?.find((blog) => blog.slug== id);
console.log(blog);

  if (!blog) return notFound();

  return <BlogPostLayout blog={blog} />;
}

export default Page;