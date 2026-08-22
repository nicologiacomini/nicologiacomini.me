import logo from '/logo.png';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="py-5 px-0 m-0 mb-5">
            <Image src="/dark-profile.png" alt="profile" width={150} height={150} className="hidden dark:block max-w-full rounded-full float-right mb-5 ml-5 w-[150px] max-xsm:w-[80px]"/>
            <Image src="/light-profile.png" alt="profile" width={150} height={150} className="block dark:hidden max-w-full rounded-full float-right mb-5 ml-5 w-[150px] max-xsm:w-[80px]"/>
            <h1 className="font-[Onest-Bold] mb-1 text-4xl"><Image className="logo mb-2" src="/logo.png" alt="logo" height={35} width={35}/>Nicolò Giacomini</h1>
            <h4 className="text-a-hover-color font-[Onest-Bold]">ML Engineer (Barcelona)</h4>
        </header>
    );
};