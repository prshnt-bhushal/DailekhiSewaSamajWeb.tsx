import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { signOut, useSession } from 'next-auth/react';
import DropdownLink from './DropdownLink';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/login' });
  };
  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex fixed w-full z-[100] bg-slate-300 shadow-md p-3">
        <div className="flex justify-between items-center w-full h-full px-2 xl:px-10">
          <div className="flex items-center overflow-hidden">
            {/* NavBar Logo */}
            <Link href="/">
              <Image
                src="/../public/Images/dailekhi-logo.png"
                alt="Main Logo"
                width="70"
                height="70"
              />
            </Link>
            {/* NavBar Title */}
            <div className="mx-3 justify-center cursor-default">
              <h3>दैलेखी सेवा समाज</h3>
              <span>काठमाडौँ, नेपाल</span>
            </div>
            {/* NavBar Flag */}
            <div>
              <Image
                src="/../public/Images/waveFlag.gif"
                alt="Waving Flag"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ul className="hidden md:flex">
              <Link href="/">
                <li
                  className={`ml-10 text-sm uppercase hover:text-[#607e91] ${
                    router.pathname === '/' ? 'font-bold underline' : ''
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={`ml-10 text-sm uppercase hover:text-[#607e91] ${
                    router.pathname === '/about' ? 'font-bold underline' : ''
                  }`}
                >
                  About us
                </li>
              </Link>
              <Link href="/gallery">
                <li
                  className={`ml-10 text-sm uppercase hover:text-[#607e91] ${
                    router.pathname === '/gallery' ? 'font-bold underline' : ''
                  }`}
                >
                  Gallery
                </li>
              </Link>
              <Link href="/projects">
                <li
                  className={`ml-10 text-sm uppercase hover:text-[#607e91] ${
                    router.pathname === '/projects' ? 'font-bold underline' : ''
                  }`}
                >
                  Projects & Events
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className={`ml-10 text-sm uppercase hover:text-[#607e91] ${
                    router.pathname === '/contact' ? 'font-bold underline' : ''
                  }`}
                >
                  Contact
                </li>
              </Link>
              <Link href="/login">
                <li
                  className={`ml-10 text-sm uppercase hover:text-[#607e91] ${
                    router.pathname === '/login' ? 'font-bold underline' : ''
                  }`}
                >
                  {status === 'loading' ? (
                    'Loading...'
                  ) : session?.user ? (
                    <div className="flex gap-3">
                      <span className="text-white uppercase">Welcome</span>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <Menu.Button className="text-white uppercase hover:bg-[#2d6163]">
                          {session.user.name}
                        </Menu.Button>
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <DropdownLink
                              className="dropdown-link"
                              href="/profile"
                            >
                              Profile
                            </DropdownLink>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              className="dropdown-link"
                              href="/#"
                              onClick={logoutClickHandler}
                            >
                              Logout
                            </a>
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  ) : (
                    <a href="/login">Login</a>
                  )}
                </li>
              </Link>
            </ul>
            <div onClick={handelNav} className="md:hidden cursor-pointer">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''
          }
          onClick={() => setNav(false)}
        >
          <div
            className={
              nav
                ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-300 p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" scroll={false} onClick={() => setNav(false)}>
                    <Image
                      src="/../public/Images/dailekhi-logo.png"
                      alt="Main Logo"
                      width="65"
                      height="60"
                    />
                  </Link>
                  <div className="mx-3 justify-center cursor-default">
                    <h3>दैलेखी सेवा समाज</h3>
                    <span>काठमाडौँ, नेपाल</span>
                  </div>
                </div>
                <div
                  onClick={handelNav}
                  className="p-3 cursor-pointer text-2xl"
                >
                  <AiOutlineCloseCircle />
                </div>
              </div>
              <div className=" border-y border-gray-900 my-4 justify-items-center">
                <p className="md:w-[90%] p-4 ">सहयोग नै पुन्ने हो। </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase ">
                <Link
                  scroll={false}
                  href="/#home"
                  onClick={() => setNav(false)}
                >
                  <li
                    className={`py-4 text-sm  hover:text-[#607e91] ${
                      router.pathname === '/' ? 'font-bold underline' : ''
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link
                  scroll={false}
                  onClick={() => setNav(false)}
                  href="/about"
                >
                  <li
                    className={`py-4 text-sm  hover:text-[#607e91] ${
                      router.pathname === '/about' ? 'font-bold underline' : ''
                    }`}
                  >
                    About Us
                  </li>
                </Link>
                <Link
                  scroll={false}
                  onClick={() => setNav(false)}
                  href="/gallery"
                >
                  <li
                    className={`py-4 text-sm  hover:text-[#607e91] ${
                      router.pathname === '/gallery'
                        ? 'font-bold underline'
                        : ''
                    }`}
                  >
                    Gallery
                  </li>
                </Link>
                <Link
                  scroll={false}
                  onClick={() => setNav(false)}
                  href="/projects"
                >
                  <li
                    className={`py-4 text-sm  hover:text-[#607e91] ${
                      router.pathname === '/projects'
                        ? 'font-bold underline'
                        : ''
                    }`}
                  >
                    Projects & Events
                  </li>
                </Link>
                <Link
                  scroll={false}
                  onClick={() => setNav(false)}
                  href="/contact"
                >
                  <li
                    className={`py-4 text-sm  hover:text-[#607e91] ${
                      router.pathname === '/contact'
                        ? 'font-bold underline'
                        : ''
                    }`}
                  >
                    Contact
                  </li>
                </Link>

                <Link href="/login">
                  <li
                    className={`py-4 text-sm  hover:text-[#607e91] ${
                      router.pathname === '/login'
                        ? 'font-bold underline'
                        : ''
                    }`}
                  >
                    {status === 'loading' ? (
                      'Loading...'
                    ) : session?.user ? (
                      <div className="flex gap-3">
                        <span className="text-white uppercase">Welcome</span>
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <Menu.Button className="text-white uppercase hover:bg-[#2d6163]">
                            {session.user.name}
                          </Menu.Button>
                          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <DropdownLink
                                className="dropdown-link"
                                href="/profile"
                              >
                                Profile
                              </DropdownLink>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                className="dropdown-link"
                                href="/#"
                                onClick={logoutClickHandler}
                              >
                                Logout
                              </a>
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    ) : (
                      <a href="/login">Login</a>
                    )}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
