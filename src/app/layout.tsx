'use client'
import { ReactNode,useEffect } from 'react';
import "./globals.scss";

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';



export default function RootLayout({ children }: { children: ReactNode }) {
  // const router = useRouter()
  // const pathname = usePathname()
  // const hideHeaderPaths = ["/dashboard", "/settings", "/table", "/analytics"];
  // const showHeader = hideHeaderPaths.includes(pathname);
  return (
    <html lang="ru">
          <body>
            <div className='headerDirection'>
              <div className='mobileCenter'>
                {children}
              </div>
            </div>
          </body>
    </html>
  );
}
