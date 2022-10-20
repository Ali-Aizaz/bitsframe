import Image from 'next/image';

function Portfolio({ props }) {
  return (
    <section id='portfolio'>
      <div className='border-t w-full border-gray-300' />
      <h1 className='w-full tracking-[1em] relative top-10 text-center text-lg text-gray-400 font-semibold'>
        PORTFOLIO
      </h1>
      <br />
      <ul className='xl:w-3/5 lg:w-4/5 w-full space-y-20 mb-20 p-4 m-auto flex flex-col items-center justify-center'>
        {props.map((prop, i, arr) => {
          return (
            <li
              key={i}
              className={`relative justify-evenly space-x-5 space-y-5 w-full top-20 ${
                i === arr.length - 1 ? '' : 'border-b'
              }  border-gray-300 flex md:flex-row flex-col items-center `}
            >
              <Image src={prop.image} alt='name' width='400px' height='400px' />
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl w-full font-semibold'>{prop.name}</h1>
                <p className='max-w-[500px] relative top-10 text-gray-500'>
                  {prop.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Portfolio;
