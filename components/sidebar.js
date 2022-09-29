import Link from 'next/link';

const Sidebar = () => {
  return (
    <section className='h-[100vh] bg-white top-0 w-6 justify-center  flex items-center fixed z-10 '>
      <Link href={'mailto:info@bitsframe.com'}>
        <label className='animate-pulse [writing-mode:vertical-lr;] cursor-pointer font-semibold rotate-180 text-gray-700'>
          Email us
        </label>
      </Link>
    </section>
  );
};

export default Sidebar;
