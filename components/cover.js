import Link from 'next/link';
export default function Cover() {
  return (
    <>
      <section
        className={`flex justify-center font-semibold bg-black relative -top-[100px] text-white min-h-[600px] max-h-[700px]`}
        style={{ clipPath: 'ellipse(100% 65% at 20% 35%)' }}
      >
        <div className='flex text-center relative top-[50px] flex-col justify-center items-center min-h-[400px] max-h-[700px] space-y-6 lg:w-1/3 md:w-1/2 w-4/5'>
          <h1 className='sm:text-4xl text-2xl bg-gradient-to-r text-transparent from-[#f12711] to-[#f5af19] bg-clip-text'>
            FULL STACK WEB & MOBILE APP DEVELOPMENT
          </h1>
          <h2 className='sm:text-lg text-md'>
            Specializing in custom app development. If you&apos;re a business
            seeking a web presence or are looking to hire a firm, contact us
            here.
          </h2>
          <Link href={'#portfolio'}>
            <button className='px-4 py-3 rounded-xl transition-all hover:rounded-none ease-in-out duration-300 delay-100 bg-yellow-600'>
              Get started
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
