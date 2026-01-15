import { aiBlogs, Blog, programmingBlogs, technologyBlogs } from '@/store/stoire';
export interface Routes {
    name: string;
    href: string;
}// it is a interface for the routes ->interface means it is a type of object which 
 export const routes: Routes[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "AI",
    href: "/ai",
  },
  {
    name: "Programming",
    href: "/programming",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const BlogMap={
  technology:technologyBlogs,
  ai:aiBlogs,
  programming:programmingBlogs
}


export const getRandomBlog=(batchsize:number)=>{


let ans:Blog[]=[]
 const res=randomBlog(batchsize,ans)
 console.log(res.length);
 
    return res.slice(1)
}

const randomBlog=(batchsize:number,ans:Blog[])=>{
    if(ans.length>=batchsize-1)return ans;
   const number1=Math.floor(Math.random()*4)
      routes.slice(1,4).map((r,i)=>{
    let a1=BlogMap[r?.href?.slice(1) as keyof typeof BlogMap][number1]
    ans.push(a1)
  })

  return randomBlog(batchsize,ans)
}