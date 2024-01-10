import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-cyan-700 to-blue-800 text-slate-300 flex flex-col justify-between">
      <div className="p-10 grid grid-cols-3 place-items-center items-start laptop:grid-cols-2 laptop:place-items-start tablet:grid-cols-1">
        <p className="">
          Welcome to BlitzByte, your premier destination for cutting-edge computing solutions.
        </p>
        <div className="flex flex-col items-center tablet:mt-10 tablet:items-start">
          <p>Contact</p>
          <ul className="flex py-6 laptop:p-0 laptop:ml-20 tablet:my-6 tablet:mx-0">
            <li className="mx-2 tablet:ml-0"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={25} /></a></li>
            <li className="mx-2"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} /></a></li>
            <li className="mx-2"><a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a></li>
          </ul>
        </div>
        <div className="flex-grow laptop:mt-10 phone:w-full">
          <p>Subscribe for our newsletter</p>
          
            <input type="email" className="w-full h-10 bg-slate-100 pl-4 phone:w-full mt-5 rounded-md" placeholder="Email.."/>
            <button type="button" className="w-40 h-10 bg-cyan-500 shadow-xl shadow-cyan-500/30 text-white hover:bg-purple-600 hover:shadow-purple-500/50 phone:w-full mt-5 rounded-md">Subscribe</button>
          
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
