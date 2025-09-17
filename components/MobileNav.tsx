'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <div className="p-2 rounded-lg hover:bg-brand-black-800 transition-colors duration-300">
            <Image
              src="/icons/hamburger.svg"
              width={36}
              height={36}
              alt="hamburger icon"
              className="cursor-pointer sm:hidden"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="border-r-2 border-brand-orange-500/30 bg-gradient-to-b from-brand-black-950 to-brand-black-900 backdrop-blur-lg">
          <Link href="/" className="flex items-center gap-1">
            <p className="text-[26px] font-extrabold bg-gradient-to-r from-brand-orange-500 to-brand-orange-300 bg-clip-text text-transparent">
              VibeMeet
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-xl w-full max-w-60 transition-all duration-300 hover-lift group',
                          {
                            'bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-brand-black-950 shadow-lg': isActive,
                            'hover:bg-brand-black-800 hover:border-brand-orange-500 border border-transparent': !isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn(
                            'transition-all duration-300',
                            {
                              'filter brightness-0': isActive,
                              'group-hover:filter group-hover:sepia group-hover:saturate-[10000%] group-hover:hue-rotate-[25deg] group-hover:brightness-[0.8]': !isActive,
                            }
                          )}
                        />
                        <p className={cn(
                          "font-semibold transition-all duration-300",
                          {
                            'text-brand-black-950': isActive,
                            'text-white group-hover:text-brand-orange-400': !isActive,
                          }
                        )}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
