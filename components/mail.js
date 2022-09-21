const Mail = () => {
  return (
    <section
      id='mail'
      className='contact-us h-[700px] relative top-32 items-center flex flex-col'
    >
      <h1 className='text-2xl text-black font-semibold text-center '>
        Get In Touch
      </h1>
      <form className='relative top-20 md:w-[600px] w-[300px] items-center flex flex-col justify-center space-y-4'>
        <div className='flex md:flex-row flex-col md:space-y-0 space-y-2 w-full md:space-x-2 space-x-0'>
          <div className='md:w-1/2 w-full'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
              EMAIL
            </label>
            <input
              placeholder='Email'
              required
              className='p-2.5 rounded-lg h-11 border-gray-300 focus:border-2 w-full border transition-all ease-in-out duration-300 focus:outline-none focus:border-yellow-300'
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
              PLAN
            </label>
            <select
              id='countries'
              defaultValue={'DEFAULT'}
              required
              className=' p-2.5 rounded-lg h-11 border-gray-300 focus:border-2 w-full border transition-all ease-in-out duration-300 focus:outline-none focus:border-yellow-300'
            >
              <option value={'DEFAULT'} className='text-gray-400'>
                CHOOSE A PLAN
              </option>
              <option value='1'>BASIC</option>
              <option value='2'>STANDARD</option>
              <option value='3'>PREMIUM</option>
            </select>
          </div>
        </div>
        <textarea
          placeholder='I want ...'
          required
          className=' p-2.5  rounded-lg h-[150px] border-gray-300 focus:border-2 w-full border transition-all ease-in-out duration-300 focus:outline-none focus:border-yellow-300'
        ></textarea>
        <button
          type='submit'
          className='px-2  text-white font-semibold  py-3 rounded-full w-[130px] transition-all hover:text-yellow-600  hover:bg-white border border-yellow-600 ease-in-out duration-300 bg-yellow-600'
        >
          SEND
        </button>
      </form>
    </section>
  );
};

export default Mail;
