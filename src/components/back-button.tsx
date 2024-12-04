import Link from "next/link";

export default function BackButton() {
    return (
        <div className='text-left my-5'>
            <Link className='bg-transparent text-text-button hover:text-a-hover-color flex items-start gap-2 justify-center w-12 h-12 p-0 m-0' href='/posts'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>
                </svg>
            </Link>
        </div>
    );
}