import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-brand-black-950 border-b border-brand-black-800 px-6 py-4 lg:px-10 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-1">
        <p className="text-[26px] font-extrabold bg-gradient-to-r from-brand-orange-500 to-brand-orange-300 bg-clip-text text-transparent">
          VibeMeet
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
