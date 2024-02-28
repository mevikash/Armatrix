'use client'
import Link from 'next/link';
import {useMediaQuery} from 'react-responsive';

const Nav = ({ containerStyles, LinkStyles }) => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)',
    })
    return (
    <nav className={`${containerStyles}`}>
        <div className=' flex xl:flex sm:flex md:flex lg:flex absolute justify-between right-10 top-20 '>

            <ul className="hidden my-6 sm:flex">
                  <li className="ml-0 uppercase text-2xl text-white">
                      <Link href="/">
                          Home
                      </Link>
                  </li>
                  <li className="ml-40 uppercase text-2xl text-white">
                      <Link href="/team">
                          Team
                      </Link>
                  </li>
                  {/* <li className="ml-40 uppercase hover:border-b text-xl text-white">
                      <Link href="/Contacts">
                          NEW
                      </Link>
                  </li> */}
                  <li className="ml-40 uppercase text-2xl text-white">
                      <Link href="/Contacts">
                          Contact US
                      </Link>
                  </li>
              </ul>
        </div>
            
        </nav>
    );
};
        
export default Nav;

