'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Download, Gamepad } from 'lucide-react'

type NavItem = {
  name: string
  href: string
}

interface NavbarProps {
  navigation: NavItem[]
}


export function Navbar({ navigation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex ">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Teodor Fredriksson Portfolio</span>
            {/* <HomeIcon className="h-16 w-auto" color='white'/> */}
            {/* <img src="/assets/cv_profilepic5.jpg"
              alt="Teodor Fredriksson"
              className="h-24 w-24 rounded-full object-cover ring-2 ring-indigo-400 flex-shrink-0"/> */}
            <h3 className="text-white font-bold text-xl mt-2">
              Home
            </h3>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center  lg:gap-x-12">

          <a
            href="/assets/futuregames/CV Game Programmer Teodor Fredriksson.pdf"
            download
          >
            <div className="flex flex-row rounded-md px-5 bg-pink-600 text-white font-semibold transition-transform duration-300 ease-out
               hover:cursor-pointer text-sm hover:shadow-xl  hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full">
              <button className='hover:cursor-pointer'>
                Resumé
              </button>
              <Download className="w-5 h-5 ml-2 " />
            </div>
          </a>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold mt-auto mb-auto text-white">
              {item.name}
            </a>
          ))}
        </div>

      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
