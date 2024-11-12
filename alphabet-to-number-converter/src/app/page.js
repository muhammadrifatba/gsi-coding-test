"use client"
import Image from "next/image";
import TextConverter from "../../components/TextConverter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default function Home() {
  return (
    
    <div className=" h-screen flex bg-slate-300 items-center justify-center">
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
     
          <div className="w-full max-w-screen-sm px-4 py-5 flex flex-col  bg-white rounded-lg shadow-lg "><TextConverter /></div>
        
      
        
        
        
    </div>
  );
}