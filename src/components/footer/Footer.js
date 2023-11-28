import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black text-slate-300 flex flex-col justify-between">
      <div className="p-10 grid grid-cols-3 place-items-center items-start laptop:grid-cols-2 laptop:place-items-start tablet:grid-cols-1">
        <p className="">
          Welcome to BlitzByte, your premier destination for cutting-edge computing solutions.
        </p>
        <ul className="flex py-6 laptop:p-0 laptop:ml-20 tablet:my-6 tablet:mx-0">
          <li className="mx-4 tablet:ml-0"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={25} /></a></li>
          <li className="mx-4"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} /></a></li>
          <li className="mx-4"><a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a></li>
        </ul>
        <div className="flex-grow laptop:mt-10">
          <p>Subscribe for our newsletter</p>
          <div className="flex items-center mt-4">
            <input type="email" className="w-full h-10 bg-slate-300" />
            <button type="button" className="w-40 h-10 bg-blue-500">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center ">
        <hr className="w-full border-t border-slate-100 opacity-25" />
        <div className="p-6 text-sm">
          <p>2023 BlitzByte All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
