export default function Header() {
    return (
        <header className="py-5 px-0 m-0 mb-5">
            <img src="/profile.png" alt="profile" width="150" className="max-w-full rounded-full float-right mb-5 ml-5 w-[150px] max-xsm:w-[80px]"/>
            <h1 className="font-[Onest-Bold] mb-1 text-4xl"><img className="logo mb-2" src="favicon.ico" alt="logo" width="30"/>Nicolò Giacomini</h1>
            <h4 className="text-a-hover-color font-[Onest-Bold]">Computer Science Engineer</h4>
        </header>
    );
};