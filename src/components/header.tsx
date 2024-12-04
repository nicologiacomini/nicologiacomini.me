export default function Header() {
    return (
        <>
            {/* <header className="header flex items-start p-8 m-0 text-sky-950 justify-between items-center w-full">
                <div className="text-3xl">Hi everyone! I'm a header!</div>
                <img src={profilePng} alt="profile" width="150" /> */}
                {/* <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav> */}
            {/* </header> */}
            {/* <header className="header flex justify-center w-full py-8 px-0 m-0 font-['Onest-Black']">
                <div className="flex items-center justify-between max-w-screen-sm w-full max-md:mx-2">
                    <div className="text-4xl">Nicolò Giacomini</div>
                    <div className="text-4xl"><p>Hi everyone!</p><p>I&apos;m a header!</p></div>
                    <img src="/file.svg" alt="profile" width="50" />
                </div>
            </header> */}
            <header className="py-8 px-0 m-0 mb-5">
                <img src="/profile.png" alt="profile" width="150" className="max-w-full rounded-full float-right mb-5 ml-5 w-[150px] max-xsm:w-[80px]"/>
                <h1 className="font-[Onest-Bold] mb-1 text-4xl">Nicolò Giacomini</h1>
                <h4 className="text-a-hover-color">Computer Science Engineer</h4>
            </header>
        </>
    );
};