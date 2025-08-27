'use client';

import { Dialog, Transition } from '@headlessui/react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Fragment, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { headerNavLinks } from './navbar';
import { AlignJustify, X } from 'lucide-react'; // Impor ikon AlignJustify dan X dari lucide-react
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        if (navRef.current) enableBodyScroll(navRef.current);
      } else {
        // Prevent scrolling
        if (navRef.current) disableBodyScroll(navRef.current);
      }
      return !status;
    });
  };

  useEffect(() => {
    return clearAllBodyScrollLocks;
  }, []);

  return (
    <>
      <Button variant="outline" size="icon" onClick={onToggleNav} className="sm:hidden">
        <AlignJustify />
      </Button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <Dialog.Panel className="fixed left-0 top-0 z-70 h-full w-full bg-white opacity-95 duration-300 dark:bg-gray-950 dark:opacity-[0.98]">
              <nav
                ref={navRef}
                className="flex h-full basis-0 flex-col items-start overflow-y-auto text-left"
              >
                {/* Tambahkan tulisan "Menu" dan ikon X */}
                <div className="w-full flex justify-between items-center py-7 pr-12">
                  <span className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
                    Menu
                  </span>
                  <Separator/>
                  <Button
                    variant="ghost"
                    aria-label="Toggle Menu"
                    onClick={onToggleNav}
                    className=""
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Daftar headerNavLinks */}
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href as any}
                    className="mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline-0 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNav;