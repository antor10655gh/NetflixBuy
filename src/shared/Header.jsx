import React from 'react';
import PrimBtn from '../components/button/PrimBtn';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const myMenu = [
    {
      name: 'Tending Products',
      link: '/trending_products'
    },
    {
      name: 'Gift Cards',
      link: '/gift_cards'
    },
    {
      name: 'Best Seller',
      link: '/best_seller'
    },
    {
      name: 'Gaming Giftcards',
      link: '/gaming_giftcards'
    },
    {
      name: 'Video Games',
      link: '/video_games'
    },
    {
      name: 'Subscriptions',
      link: '/subscriptions'
    },
    {
      name: 'Best Softwares',
      link: '/best_softwares'
    }
  ];

  return (
    <div className='px-5'>
      <div className='hidden lg:block'>
      <div className="flex flex-col lg:flex-row justify-between items-center py-5">
        <div>
          <h1 className="text-[#DC2626] text-xl">NetflixBuy</h1>
        </div>
        <div className="flex gap-8">
          {myMenu.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <Link
                    to={item.link}
                    className="text-white hover:text-[#DC2626] transition duration-150"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <PrimBtn text="Login" />
        </div>
      </div>
      </div>
      <div className='block lg:hidden py-4'>
        <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[#DC2626] text-xl">NetflixBuy</h1>
        </div>
        <div>
          <GiHamburgerMenu className='text-white text-2xl' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
