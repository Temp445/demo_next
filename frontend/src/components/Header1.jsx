'use client'

import { Disclosure } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from '../assets/Images/AceLogo.png'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  
  { name: 'Product Enquiry', href: '#contact' },
  // { name: 'Contact Us', href: '#contact' },
  { name: 'About us', href: '#about', },
  { name: 'Other Products', href: '/products'},

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
   <div className='w-full z-50 px-1 sm:px-6'>
     <Disclosure as="nav" className="bg-white w-full" open={isOpen} onChange={handleNavigation}>
      {({ open, close }) => (
        <>
          <div className="mx-auto sm:px-6 lg:px-8 xl:px-0">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <Link href="#">  
                <div className="flex flex-1 md:items-center lg:justify-start gap-1">
                  <Image src={Logo} width={50} height={48} alt="Company Logo" className="h-10 pl-2 xl:h-10" />
                  <span className="mt-3 flex text-[16px] sm:text-base md:mt-1 font-semibold md:font-normal md:text-lg xl:font-semibold">
                    ACE <span className='lg:hidden'>Soft.in</span> <span className='hidden ml-2 lg:block'>Software Solutions Pvt. Ltd</span>
                  </span>
                </div>
              </Link> 
              
              <Link href="#contact" className='lg:hidden font-bold text-[12px] px-1 rounded bg-black text-white py-1 items-center ml-24 sm:ml-70'>
                Book A Demo
              </Link>
              
              <div className="flex items-center lg:hidden md:justify-end">
                <Disclosure.Button 
                  className="relative inline-flex items-center justify-center rounded-md p-2 gap-3 text-gray-600 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white"
                  aria-label="Main menu"
                >
                  {open ? (
                    <XMarkIcon className="block size-6" aria-hidden="true" />
                  ) : (
                    <HiMenuAlt3 className="block justify-end size-6 font-black" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>


              {/* Desktop Navigation */}
              <div className="hidden md:hidden lg:block">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-black' : 'hover-effect-1 hover:text-white cursor-pointer',
                        'rounded-md px-2 py-2 text-12 md:text-base font-semibold'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="lg:hidden absolute bg-white w-full z-50">
            <div className="space-y-1 px-4 pt-2 pb-3 flex-col flex items-start">
              {navigation.map((item) => (
                <div key={item.name} className="w-full">
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-800 hover:text-white',
                      'block rounded-md px-3 py-2 text-base text-[14px] w-full'
                    )}
                    onClick={() => close()}
                  >
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
     </Disclosure>
   </div>
  )
}