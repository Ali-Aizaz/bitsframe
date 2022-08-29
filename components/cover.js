export default function Cover() {
  return (
    <>
      <main className=' flex justify-center font-semibold bg-black text-white  min-h-[400px] max-h-[700px]'>
        <div className='flex text-center flex-col justify-center items-center min-h-[400px] max-h-[700px] space-y-6 w-1/3'>
          <h1 className='text-4xl'>FULL STACK WEB & MOBILE APP DEVELOPMENT</h1>
          <h2 className='text-lg'>
            Specializing in custom app development. If you're a business seeking
            a web presence or are looking to hire a firm, contact us here.
          </h2>
          <button className='px-4 py-3 rounded-xl transition-all hover:rounded-none ease-in-out duration-300 delay-100 bg-yellow-600'>
            Get started
          </button>
        </div>
      </main>
    </>
  );
}
