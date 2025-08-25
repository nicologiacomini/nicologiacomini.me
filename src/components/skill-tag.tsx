import { Children } from "react";

export default function SkillTag({children} : {children: string}) {
    return (
        <span className="bg-background-date text-date-color text-md font-[Onest-Bold] me-2 px-2.5 py-0.5 rounded">
            {children}
        </span>
    );
}