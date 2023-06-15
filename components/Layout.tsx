import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';
import FooterBox from './FooterBox';

export default function Layout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - दैलेखी सेवा समाज' : 'दैलेखी सेवा समाज'}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="top-right" limit={1} />
      <div className="flex w-full h-screen flex-col justify-between">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <FooterBox />
        </footer>
      </div>
    </>
  );
}
