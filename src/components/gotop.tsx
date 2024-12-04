import React from 'react'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from './ui/button';

// function goToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth'})
// }

function isVisible(scrollNumber: number, sizeIcon: string){
    const r = document.querySelector(':root') as HTMLElement;
    if (scrollNumber < 300 ) {
        r.style.setProperty('--size-gotop', '0px')
    }
    else {
        r.style.setProperty('--size-gotop', sizeIcon+'px')
    }
    console.log(r.style.getPropertyValue('--size-gotop'))
}

interface PropsGoTop{
    sizeIcon: string
}

export default function GoTop({sizeIcon}: PropsGoTop) {
    const [scrollPosition, setScrollPosition] = useState(0)
    isVisible(scrollPosition, sizeIcon)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        // <div>
        //     <button
        //     className="fixed z-50 bottom-24 right-8 shadow-md rounded-full bg-[#f9f9f9] h-12 w-12 flex justify-center items-center" 
        //     onClick={goToTop} 
        //     ><ArrowUp />
        //     </button>
        // </div>
        <div>
            <Button className='bg-background-button text-text-button hover:bg-hover-button w-size-gotop' size='square'>
                <ArrowUp size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }}/>
            </Button>
        </div>
    )
}
