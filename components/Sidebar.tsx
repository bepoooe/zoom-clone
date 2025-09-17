'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-brand-black-800 bg-brand-black-950 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-xl justify-start transition-all duration-300 group',
                {
                  'bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-brand-black-950 shadow-lg shadow-brand-orange-500/25': isActive,
                  'hover:bg-brand-black-800/70 hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-brand-orange-500/30': !isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className={cn(
                  'transition-all duration-300',
                  {
                    'filter brightness-0': isActive,
                    'filter brightness-100 group-hover:brightness-200 group-hover:contrast-150': !isActive,
                  }
                )}
              />
              <p className={cn(
                "text-lg font-semibold max-lg:hidden transition-all duration-300",
                {
                  'text-brand-black-950': isActive,
                  'text-white group-hover:text-brand-orange-400': !isActive,
                }
              )}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
