import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <header className='px-10 py-5 font-semibold text-white bg-black flex justify-between'>
        <h1 className='text-xl'>bitsframe</h1>
        <ul className='md:flex hidden space-x-10 text-md'>
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
        <div className='flex flex-col md:hidden'>
          <button
            onClick={() => {
              setDropDown((dropDown) => !dropDown);
            }}
          >
            <Image
              src={'/hamburger.svg'}
              alt={'menu'}
              width='20'
              height={'20'}
            />
          </button>
        </div>
      </header>
      <ul
        className={`w-[100vw] md:hidden transition-all text-black bg-white  space-y-5 text-center text-md ${
          dropDown ? 'flex flex-col h-[130px] py-2 ' : 'h-0'
        }`}
      >
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
