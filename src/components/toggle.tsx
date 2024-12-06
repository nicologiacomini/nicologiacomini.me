'use client'

import * as React from "react"
import dynamic from 'next/dynamic'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const Moon = dynamic(() => import('lucide-react').then(mod => mod.Moon), { ssr: false })
const Sun = dynamic(() => import('lucide-react').then(mod => mod.Sun), { ssr: false })

export function ModeToggle({sizeIcon}: {sizeIcon: string}) {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        let mounted = localStorage.getItem('mounted')
        if (!mounted) {
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
            setTheme(prefersDarkMode ? "dark" : "light")
            localStorage.setItem('mounted', 'true')
        }
        setMounted(true)
    }, [])

    return (
        <Button variant="navbar" size="square" onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} >
            {theme === 'dark' ? (
                <Sun size={sizeIcon} style={{ width: `${sizeIcon}px`, height: `${sizeIcon}px` }} />
            ) : (
                <Moon size={sizeIcon} style={{ width: `${sizeIcon}px`, height: `${sizeIcon}px` }} />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}