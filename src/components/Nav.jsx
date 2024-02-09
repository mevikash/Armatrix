import Link from 'next/link';
import { NavLink } from "react-router-dom";

export default function Nav  ()  {
    return (
        <nav className="flex xl:flex absolute right-20 text-[50px]">
            <ul className="hidden sm:flex">
                <li className="ml-10 uppercase hover:border-b text-xl text-black">
                    <Link 
                    // className={`link ${ '/' ? 'active' : ''}`} 
                    href="/">
                        <legacyBehavior>Home</legacyBehavior>
                    </Link>
                </li>
                <li className="ml-10 uppercase hover:border-b text-xl text-black">
                    {/* <Link href="/Contacts">
                        <legacyBehavior>Contact Us</legacyBehavior>
                    </Link> */}
                    <a href='Contacts'>Contacts</a>
                </li>
                <li className="ml-10 uppercase hover:border-b text-xl text-black">
                    {/* <Link href="/team">
                        <legacyBehavior>Team</legacyBehavior>
                    </Link> */}
                    <a href='team'>Team</a>
                </li>
                {/* <li className="bg-gradient-to-b from-blue-50 to-red-100 ml-10 uppercase hover:border-b text-xl text-black">
                    <Link href="/team">
                        <legacyBehavior>Add</legacyBehavior>
                    </Link>
                </li> */}
            </ul>
            
        </nav>
    );
};
