import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { sendMessage } from '../pages/api/hello';
import { useRef } from 'react';
const ContactUs = () => {
  const email = useRef(null);
  const plan = useRef(null);
  const description = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      email: email.current.value,
      plan: plan.current.value,
      description: description.current.value,
    };
    const upload = sendMessage(message);
    toast.promise(upload, {
      loading: 'Sending...',
      success: 'Message Sent',
      error: 'error',
    });
    await upload;
    e.target.reset();
  };
  return (
    <>
      <label
        htmlFor='my-modal'
        id='contact us'
        className='fixed bottom-4 right-4 z-40 shadow-xl animate-bounce rounded-full modal-button h-[70px]'
      >
        <Image src={'/chat.png'} alt='contact us' width={'80'} height='80' />
      </label>
      <input type='checkbox' id='my-modal' className='modal-toggle' />

      <div className='modal backdrop-blur-sm'>
        <div className='modal-box bg-gray-700/90 backdrop-blur-md text-gray-400'>
          <h3 className='font-bold text-lg'>Get In Touch!</h3>
          <form className='space-y-4 text-gray-300' onSubmit={handleSubmit}>
            <div className='flex space-x-3'>
              <input
                placeholder='Email'
                ref={email}
                required
                className='bg-transparent  p-2.5 rounded-lg h-11 w-full focus:outline-none '
              />
              <select
                id='plans'
                ref={plan}
                defaultValue={'DEFAULT'}
                required
                className='bg-transparent p-2.5  rounded-lg h-11 w-full focus:outline-none '
              >
                <option value={'DEFAULT'} disabled>
                  CHOOSE A PLAN
                </option>
                <option value='Basic'>BASIC</option>
                <option value='Standard'>STANDARD</option>
                <option value='Premium'>PREMIUM</option>
              </select>
            </div>
            <textarea
              placeholder='I want ...'
              ref={description}
              required
              className=' p-2.5 bg-transparent rounded-lg h-20 w-full focus:outline-none '
            ></textarea>
            <div className='modal-action flex'>
              <button type='submit' className='btn btn-outline text-gray-400'>
                Submit
              </button>
              <label htmlFor='my-modal' className='btn'>
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
