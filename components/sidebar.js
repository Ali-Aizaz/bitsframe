import Link from 'next/link';

const Sidebar = () => {
  return (
    <section className='h-[100vh] bg-transparent top-0 w-6 justify-center flex items-center fixed z-10 '>
      <Link href={'mailto:info@bitsframe.com'}>
        <label className='[writing-mode:vertical-lr;] cursor-pointer tracking-wide font-semibold rotate-180 text-xl text-gray-700'>
          Email us: &nbsp; info@bitsframe.com
        </label>
      </Link>
    </section>
  );
};

export default Sidebar;
