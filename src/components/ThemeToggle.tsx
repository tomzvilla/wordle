import { useEffect, useState } from "react";
import darkIcon from '../assets/img/dark-icon.svg'
import lightIcon from '../assets/img/light-icon.svg'

interface ITheme {
    theme: 'dark' | 'light'
}

const ThemeToggle = () => {

    const [currentTheme, setCurrentTheme] = useState<ITheme>({theme: 'light'})

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle('dark');

      }, [currentTheme]);

    const switchTheme = (): void => {
        setCurrentTheme(_ => {
            return currentTheme.theme === 'light' ? { theme: 'dark' } : { theme: 'light' }
        })

    }
    return (
        <div className="flex flex-col justify-center ml-3">
            <button className='absolute right-5 md:right-10 cursor-pointer' onClick={switchTheme}>
                <img src={darkIcon} alt="turn light mode" className="hidden dark:block dark:invert"/>
                <img src={lightIcon} alt="turn dark mode" className="block dark:hidden "/>
            </button>
        </div>
    )
}

export default ThemeToggle