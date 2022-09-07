const Price = () => {
  return (
    <section className='Price  bg-gray-500 min-h-[100vh] relative top-20 space-y-20'>
      <h1 className='text-lg tracking-widest relative top-20 text-white w-full text-center  font-semibold'>
        PRICE PER BUILD
      </h1>
      <br />
      <div className=' w-full flex flex-wrap justify-center'>
        <div className='w-[330px] h-[300px]  mt-20 mx-5 rounded-xl shadow-xl  items-center flex flex-col bg-white transition-all hover:-translate-y-2 ease-in-out duration-500'>
          <h2 className='text-md  text-center py-4 font-bold text-gray-600 w-full rounded-t-xl'>
            BASIC
          </h2>
          <ul className='text-center space-y-4 text-gray-600 relative top-7'>
            <li>Website Audit</li>
            <li>Design</li>
            <li>Development</li>
          </ul>
          <button className='px-2 relative py-3 text-black top-16 rounded-full w-[140px] transition-all hover:text-white  hover:bg-black border border-black ease-in-out duration-300 bg-white'>
            Request quote
          </button>
        </div>
        <div className='w-[330px] h-[500px] mt-20 mx-5 rounded-xl shadow-xl items-center flex flex-col bg-white transition-all hover:-translate-y-2 ease-in-out duration-500'>
          <h2 className='text-md text-center py-4 font-bold text-white bg-blue-400 w-full rounded-t-xl'>
            STANDARD
          </h2>
          <ul className='text-center space-y-4 text-gray-600 relative top-7'>
            <li>Website Audit</li>
            <li>Design</li>
            <li>Development</li>
            <li>Backups</li>
            <li>Analytics</li>
            <li>Live Chat</li>
            <li>Search Engine Optimization</li>
            <li>Content Management</li>
          </ul>
          <button className='px-2 relative py-3 text-black top-16 rounded-full w-[140px] transition-all hover:text-white  hover:bg-blue-400 border border-black hover:border-blue-400 ease-in-out duration-300 bg-white'>
            Request quote
          </button>
        </div>
        <div className='w-[330px] h-[660px] mt-20 mx-5 rounded-xl shadow-xl items-center flex flex-col bg-white transition-all hover:-translate-y-2 ease-in-out duration-500'>
          <h2 className='text-md text-center py-4 font-bold text-white bg-amber-400 w-full rounded-t-xl'>
            PREMIUM
          </h2>
          <ul className='text-center space-y-4 text-gray-600 relative top-7'>
            <li>Website Audit</li>
            <li>Design</li>
            <li>Development</li>
            <li>Backups</li>
            <li>Analytics</li>
            <li>Live Chat</li>
            <li>Search Engine Optimization</li>
            <li>Content Management</li>
            <li>Maintenance Agreement</li>
            <li>E-Commerce</li>
            <li>Email Setup</li>
            <li>Hosting</li>
          </ul>
          <button className='px-2 relative py-3 text-black top-16 rounded-full w-[140px] transition-all hover:text-white  hover:bg-amber-400 border border-black hover:border-amber-400 ease-in-out duration-300 bg-white'>
            Request quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Price;
