'use client'

import { Home, Contact, BookOpenText } from 'lucide-react'
import { Button } from './ui/button';
import { ModeToggle } from './toggle';
import Link from 'next/link'

export default function NavBar() {
    const sizeIcon: string = '20'

    return (
        <div className='fixed z-50 bottom-0 w-full align-top h-24 text-center bg-gradient-to-t from-white dark:from-border-card'>
            <div className='navbar font-[Onest-Regular] bg-background-button rounded-lg inline-flex justify-center items-center gap-1 px-4 py-2 shadow-md shadow-shadow-navbar h-16 border-[0.5px] border-border-card'> 
                
                <Link href='/'>
                    <Button className='navbutton text-left' variant="navbar" size="square">
                        <div className='max-md:hidden mr-2'></div>
                        <Home size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} />
                        <div className='navlabel max-md:hidden'>Home</div>
                    </Button>
                </Link>
                
                <div className='text-2xl'>|</div>
                
                <Link href='/posts'>
                    <Button className='navbutton text-left' variant="navbar" size="square">
                        <div className='max-md:hidden mr-2'></div>
                        <BookOpenText size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} />
                        <div className='navlabel max-md:hidden'>Posts</div>
                    </Button>
                </Link>
                
                <div className='text-2xl'>|</div>

                <Link href='/contact'>
                    <Button className='navbutton text-left' variant="navbar" size="square">
                        <div className='max-md:hidden mr-2'></div>
                        <Contact size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} />
                        <div className='navlabel max-md:hidden'>Contact</div>
                    </Button>
                </Link>

                <div className='text-2xl'>|</div>
                <ModeToggle sizeIcon={sizeIcon}/>
            </div>
        </div>
    );
};