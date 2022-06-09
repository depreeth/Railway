import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
            <h1 className='text-3xl md:text-4xl font-bold'>RAILSTAR..</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4 font-bold'>PNR Status</li>
            <li className='p-4 font-bold'>Alternates</li>
            <li className='p-4 font-bold'>Train Schedule</li>
            <li className='p-4 font-bold'>About Us</li>
        </ul>
        <div className=' hidden md:flex md:pr-3'>
            <BsPerson/>
        </div>
        <div className='md:hidden'>
            <AiOutlineMenu/>
        </div>
        <div className='absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-6 flex flex-col'>
            <ul>
            <li className='text-3xl font-bold'>RAILSTAR..</li>
            <li className='p-4 font-bold text-2xl'>PNR Status</li>
            <li className='p-4 font-bold text-2xl'>Alternates</li>
            <li className='p-4 font-bold text-2xl'>Train Schedule</li>
            <li className='p-4 font-bold text-2xl'>About Us</li>
            </ul>
            <div className='flex flex-col pb-4'>
                <button className='p-3 border bg-gradient-to-r from-red-600 to-red-400 text-white rounded-md'>ACCOUNT</button>
            </div>
            <div className='flex justify-between my-3'>
                <FaFacebook className='icon text-2xl cursor-pointer '/>
                <FaInstagram className='icon text-2xl cursor-pointer '/>
                <FaTwitter className='icon text-2xl cursor-pointer '/>
                <FaYoutube className='icon text-2xl cursor-pointer '/>
            </div>
        </div>
    </div>
  )
}

export default Navbar