
export const Footer = () => {
  return (
    <section className='flex text-white bg-black'>
        <div className='flex flex-col items-center m-auto w-5/6 md:w-11/12 py-4'>
          <h3 className='font-light'>
            Copyright © 2023 - All Rights Reserved.
          </h3>
          <ul className='text-gray-300 flex flex-row justify-between w-11/12 m-auto pt-3 text-xs md:text-base'>
            <li className='cursor-pointer'>ABOUT US</li>
            <li className='cursor-pointer hidden sm:flex'>SERVICES</li>
            <li className='cursor-pointer'>SOCIAL MEDIA</li>
            <li className='cursor-pointer'>FAQS</li>
            <li className='cursor-pointer'>CONTACT</li>
          </ul>
        </div>
    </section>
  )
}
