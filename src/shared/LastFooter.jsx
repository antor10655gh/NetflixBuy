import React from 'react'

const LastFooter = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center py-5 bg-white gap-5 lg:gap-0'>
        <div className='flex flex-col lg:flex-row lg:justify-start items-start'>
          <img className='w-20 h-8' src="https://netflixbuy.com/assets/stripe-42d286fd.png" alt="" />
          <p className='pl-2 lg:pl-0'>Pay with security <br />Trusted and verified from Stripe</p>
        </div>
        <div>
          <ul className='flex justify-center lg:justify-between items-center gap-3 pr-5'>
            <li><img className='w-6' src="https://netflixbuy.com/assets/visa-dbe3e5ea.svg" alt="" /></li>
            <li><img className='w-12' src="https://netflixbuy.com/assets/mastercard-e0b74b86.svg" alt="" /></li>
            <li><img className='w-12' src="https://netflixbuy.com/assets/discover-30a7cf1e.svg" alt="" /></li>
            <li><img className='w-12' src="https://netflixbuy.com/assets/paysafecard-2e3270af.svg" alt="" /></li>
          </ul>
        </div>
      </div>
  )
}

export default LastFooter;