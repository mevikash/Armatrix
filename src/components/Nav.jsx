import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="flex xl:flex absolute right-20 text-[50px]">
            <ul className="hidden sm:flex">
                <li className="ml-10 uppercase hover:border-b text-xl text-black">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="ml-10 uppercase hover:border-b text-xl text-black">
                    <Link href="/Contacts">
                        Contacts
                    </Link>
                </li>
                <li className="ml-10 uppercase hover:border-b text-xl text-black">
                    <Link href="/team">
                        Team
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
