import Image from 'next/image';
const Portfolio = () => {
  return (
    <section className='Portfolio '>
      <div className='border-t w-full border-gray-300' />
      <h1 className='w-full tracking-[1em] relative top-10 text-center text-lg text-gray-400 font-semibold'>
        PORTFOLIO
      </h1>
      <br />
      <ul className='xl:w-3/5 lg:w-4/5 w-full space-y-20  m-auto flex flex-col items-center justify-center'>
        <li className='relative justify-evenly w-full top-20 border-b border-gray-300 flex md:flex-row flex-col items-center '>
          <Image
            src={'/analytics.svg'}
            alt='name'
            width='400px'
            height='500px'
          />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl w-full font-semibold'>
              Agyle Intelligence
            </h1>
            <p className='max-w-[500px] relative top-10 text-gray-500'>
              A platform for automating data collection and reporting throughout
              teams, operations and supply chains.
            </p>
            <button className='px-2 relative text-white font-semibold top-20 py-4 rounded-full w-[130px] transition-all hover:text-yellow-600  hover:bg-white border border-yellow-600 ease-in-out duration-300 bg-yellow-600'>
              Visit Website
            </button>
          </div>
        </li>
        <li className='relative justify-evenly w-full top-20 border-b border-gray-300 flex md:flex-row flex-col items-center '>
          <Image
            src={'/analytics.svg'}
            alt='name'
            width='400px'
            height='500px'
          />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl w-full font-semibold'>
              Agyle Intelligence
            </h1>
            <p className='max-w-[500px] relative top-10 text-gray-500'>
              A platform for automating data collection and reporting throughout
              teams, operations and supply chains.
            </p>
            <button className='px-2 relative text-white font-semibold top-20 py-4 rounded-full w-[130px] transition-all hover:text-yellow-600  hover:bg-white border border-yellow-600 ease-in-out duration-300 bg-yellow-600'>
              Visit Website
            </button>
          </div>
        </li>
        <li className='relative justify-evenly w-full top-20 border-b border-gray-300 flex md:flex-row flex-col items-center '>
          <Image
            src={'/analytics.svg'}
            alt='name'
            width='400px'
            height='500px'
          />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl w-full font-semibold'>
              Agyle Intelligence
            </h1>
            <p className='max-w-[500px] relative top-10 text-gray-500'>
              A platform for automating data collection and reporting throughout
              teams, operations and supply chains.
            </p>
            <button className='px-2 relative text-white font-semibold top-20 py-4 rounded-full w-[130px] transition-all hover:text-yellow-600  hover:bg-white border border-yellow-600 ease-in-out duration-300 bg-yellow-600'>
              Visit Website
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
