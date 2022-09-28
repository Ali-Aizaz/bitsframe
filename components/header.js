import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <header className='px-10 py-5 w-[95vw] m-auto rounded-xl font-semibold z-50 text-black shadow-md sticky backdrop-blur-md top-3 bg-white/70 flex justify-between'>
        <Image src={'/logo.png'} alt={'logo'} width={200} height={40} />
        <ul className='md:flex hidden items-center space-x-10'>
          <li>
            <Link href={'#services'}>SERVICES</Link>
          </li>
          <li>
            <Link href={'#portfolio'}>PORTFOLIO</Link>
          </li>
          <li>
            <Link href={'#prices'}>PRICING</Link>
          </li>
          <li>
            <Link href={'/blogs'}>BLOGS</Link>
          </li>
        </ul>
        <div className='flex flex-col justify-center md:hidden'>
          <button
            onClick={() => {
              setDropDown((dropDown) => !dropDown);
            }}
          >
            <Image
              src={'/hamburger.png'}
              alt={'menu'}
              width='20'
              height={'20'}
            />
          </button>
        </div>
      </header>
      <ul
        className={`w-[95vw] m-auto md:hidden overflow-hidden border-gray-300 rounded-xl z-50 sticky top-[100px] shadow-xl  transition-all text-black bg-white/80 backdrop-blur-md space-y-5 text-center text-md ${
          dropDown ? 'flex flex-col h-[180px] py-2 border' : 'h-0'
        }`}
      >
        <li>
          <Link href={'/blogs'}>BLOGS</Link>
        </li>
        <li>
          <Link href={'#services'}>SERVICES</Link>
        </li>
        <li>
          <Link href={'#portfolio'}>PORTFOLIO</Link>
        </li>
        <li>
          <Link href={'#prices'}>PRICING</Link>
        </li>
      </ul>
    </>
  );
}
