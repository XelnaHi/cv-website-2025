'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Download } from 'lucide-react'

type NavItem = {
  name: string
  href: string
  target?: string
}

interface NavbarProps {
  navigation: NavItem[]
}


export function Navbar({ navigation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-99 bg-gray-900 backdrop-blur-md">
      <nav aria-label="Global" className="sticky relative flex items-center p-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Teodor Fredriksson Portfolio</span>
            <h3 className="text-white font-bold text-xl mt-2">
              Teodor Fredriksson
            </h3>
            <h4 className='text-gray-400 font-bold'>Gameplay Programmer</h4>
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
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-x-12 items-center">

          <a
            href="/assets/CV/CV Game Programmer Teodor Fredriksson.pdf"
            download
          >

            <div className="flex flex-row rounded-md border border-white/30 px-4 py-2 text-white font-semibold hover:bg-white/10 transition">
              <button className='hover:cursor-pointer'>
                Resumé
              </button>
              <Download className="w-5 h-5 ml-2 " />
            </div>
          </a>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} target={item.target || '_self'} className="text-sm/6 font-semibold mt-auto mb-auto text-white hover:text-pink-500 transition">
              {item.name}
            </a>
          ))}
          <div className="hidden lg:flex flex-1 justify-end" />
        </div>

      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-100 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Teodor Fredriksson Portfolio</span>
              <h3 className="text-white font-bold text-xl mt-2">
                Teodor Fredriksson
              </h3>
              <h4 className='text-gray-400 font-bold'>Gameplay Programmer</h4>
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
                    target={item.target || '_self'}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <a
                href="/assets/CV/CV Game Programmer Teodor Fredriksson.pdf"
                download
              >
                <div className="flex flex-row rounded-md border bg-pink-600 w-50 mt-5 border-white/30 hover:cursor-pointer px-4 py-2 text-white font-semibold hover:bg-pink-500 transition">
                  <button className='hover:cursor-pointer'>
                    Resumé

                  </button>
                  <Download className="w-5 h-5 ml-2 " />
                </div>
              </a>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
