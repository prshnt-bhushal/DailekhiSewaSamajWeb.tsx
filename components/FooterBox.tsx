import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function FooterBox() {
  return (
    <footer className="flex w-full justify-between p-4 items-center bg-slate-300">
      {/* copyright section */}
      <div>
        <p> © 2022 Copyrights, दैलेखी सेवा समाज |</p>
      </div>
      {/* social handle section */}
      <div className="flex">
        <span className="text-lg text-gray-600">Follow us on :</span>
        <div className="flex w-24 mx-2">
          <Link href="/">
            <div className="m-2 hover:scale-150 ease-in duration-500">
              <FaFacebookF />
            </div>
          </Link>
          <Link href="/">
            <div className="m-2 hover:scale-150 ease-in duration-500">
              <FaTwitter />
            </div>
          </Link>
          <Link href="https://www.youtube.com/@Dailekhisewasamaj">
            <div className="m-2 hover:scale-150 ease-in duration-500">
              <FaYoutube />
            </div>
          </Link>
        </div>
      </div>
      {/* Author */}
      <Link href="https://github.com/prshnt-bhushal">
        <div className="m-2 text-sm text-gray-400">
          <FaGithub />
        </div>
      </Link>
    </footer>
  );
}
