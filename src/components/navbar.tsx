'use client'

import { Home, Contact, BookOpenText } from 'lucide-react'
import { Button } from './ui/button';
import { ModeToggle } from './toggle';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const sizeIcon: string = '20'
    const pathname = usePathname()

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            const elem = document.getElementById('contact');
            if (elem) {
                e.preventDefault();
                elem.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/#contact');
            }
        }
    };

    return (
        <div className='fixed z-50 bottom-0 w-full align-top h-24 text-center bg-gradient-to-t from-white dark:from-border-card'>
            <div className='navbar font-[Onest-Regular] bg-background-button rounded-lg inline-flex justify-center items-center gap-1 px-2 py-0 shadow-md shadow-shadow-navbar h-16 border-[0.5px] border-border-card'> 
                
                <Link href='/'>
                    <Button className='navbutton text-left' variant="navbar" size="square">
                        <div className='max-md:hidden'></div>
                        <Home size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} />
                        <div className='navlabel max-md:hidden'>Home</div>
                    </Button>
                </Link>
                
                <div className='text-2xl'>|</div>
                
                <Link href='/#contact' onClick={handleContactClick}>
                    <Button className='navbutton text-left' variant="navbar" size="square">
                        <div className='max-md:hidden'></div>
                        <Contact size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} />
                        <div className='navlabel max-md:hidden'>Contact</div>
                    </Button>
                </Link>

                <div className='text-2xl'>|</div>
                
                <Link href='/posts'>
                    <Button className='navbutton text-left' variant="navbar" size="square">
                        <div className='max-md:hidden'></div>
                        <BookOpenText size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} />
                        <div className='navlabel max-md:hidden'>Posts</div>
                    </Button>
                </Link>
                
                <div className='text-2xl'>|</div>

                <ModeToggle sizeIcon={sizeIcon}/>
            </div>
        </div>
    );
};