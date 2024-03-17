import React from 'react'
import { ModeToggle } from './mode-toggle'
import Image from 'next/image'
import Link from 'next/link'
import ManageProfileMenu from './ManageProfileMenu'

export default function Navbar() {
  return (
    <div className='flex w-full flex-row items-center justify-between bg-background px-8 py-4'>
      <Link href={'/'}>
        <div className='flex flex-row items-center justify-center gap-2'>
          <Image
            src='/logo-white.png'
            height={48}
            width={48}
            className='h-10 w-10 rounded-full'
            alt={''}
          />
          <span className='cursor-pointer text-lg font-semibold'>
            wiserquest
          </span>
        </div>
      </Link>
      <div className='flex flex-row gap-5'>
        <ModeToggle />
        <ManageProfileMenu />
      </div>
    </div>
  )
}
