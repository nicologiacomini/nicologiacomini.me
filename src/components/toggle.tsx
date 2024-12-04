import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle({sizeIcon}: {sizeIcon: string}) {
    const { theme, setTheme } = useTheme()

    return (
        <Button variant="navbar" size="square" onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark' )} >
            {theme === 'dark' ? <Sun size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} /> : <Moon size={sizeIcon} style={{ width: sizeIcon+'px', height: sizeIcon+'px' }} /> }
          <span className="sr-only">Toggle theme</span>
        </Button>
    );
}