"use client"

import Link from 'next/link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import DrawerNav from './DrawerNav';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';

export const headerNavLinks: { href: string; title: string }[] = [
  { href: '/leaderboard', title: 'Leaderboard' },
  { href: '/#', title: 'Teams' },
  { href: '/#', title: 'About' },
  { href: '/#', title: 'Project' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">Janaka</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              {headerNavLinks.map((link) => (
                <Link key={link.title} href={link.href as any}>
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    {link.title}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="hidden sm:flex items-center space-x-2">
              <Link href="/leaderboard">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/leaderboard">
                <Button>Get Started</Button>
              </Link>
            </div>

            <ThemeSwitch />

            {/* Mobile drawer trigger */}
            <div className="sm:hidden">
              <DrawerNav />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;