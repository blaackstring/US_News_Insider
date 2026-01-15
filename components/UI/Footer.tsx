import Image from "next/image";
import Link from "next/link";
const footerLinks = [
    { name: "Home", href: "/" },

    { name: "Technology", href: "technology" },

    { name: "AI", href: "ai" },


    { name: "Privacy Policy", href: "/privacy" },
]

const extraRoutes=[

    { name: "Disclaimer", href: "/disclaimer" },
    { name: "DMCA", href: "/dmca" },
    { name: "Cookie Policy", href: "/cookie-policy" },
   { name: "Terms & Conditions", href: "/terms-and-conditions" },


]
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" bg-black flex mx-auto px-2 lg:px-12 justify-center items-center dark:text-gray-200  py-10">
            <div className="container px-4 grid grid-cols-1 md:grid-cols-3 mx-auto gap-8">
                <div>
                    <Link className="text-2xl font-bold tracking-wide mb-3 " href="/">
                        <Image src="/logo.png" alt="Logo" width={160} height={140} />
                    </Link>
                    <div className="grid grid-cols-3 gap-4 w-fit mt-5">
                      <svg
  className="w-6 h-6 text-gray-800 dark:text-white"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    fill="currentColor"
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
  />
</svg>

                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd" />
                        </svg>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                        </svg>


                    </div>
                    <div className="mt-6 flex gap-4">
                        <input type="text" className="w-2/3 bg-white rounded px-2 text-gray-600" placeholder="Your email" />
                        <button className="bg-[#D1D1D1] p-2 text-md rounded text-gray-500" >Subscribe</button>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 text-blue-400">Quick Links</h3>
                   {footerLinks.map((link) => (
                    <div key={link.name} className="mb-2">
                        <Link href={link.href} className="text-gray-400 hover:text-white">
                            {link.name}
                        </Link>
                    </div>
                   ))} 
                </div>
                 <div>
                    <h3 className="mb-4 text-blue-400">Info Links </h3>
                   {extraRoutes.map((link) => (
                    <div key={link.name} className="mb-2">
                        <Link href={link.href} className="text-gray-400 hover:text-white">
                            {link.name}
                        </Link>
                    </div>
                   ))} 
                </div>

                <div className="w-full flex justify-center md:col-span-3 mt-4 border-t border-gray-700 pt-4">
                    <span className="block mx-auto">
                        © {currentYear} US News Insider. All rights reserved.
                    </span>
                </div>

            </div>
        </footer>
    );
}
