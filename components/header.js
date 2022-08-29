export default function Header() {
  return (
    <header className='px-48 py-5 font-semibold  text-white bg-black flex justify-between'>
      <h1 className='text-xl'>bitsframe</h1>
      <ul className='flex space-x-10 text-md'>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>PRICING</li>
      </ul>
    </header>
  );
}
