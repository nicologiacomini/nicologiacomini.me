import React from 'react'

interface ExperienceCardProps {
    company: string,
    position: string, 
    dates: string, 
    description: string[],
    linkCompany: string,
    img: string
}

export function ExperienceCard({ company, position, dates, description, linkCompany, img }: ExperienceCardProps) {
  return (
    <div className="group my-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border border-border-experience pt-4 pb-2 text-gray-700 sm:mx-auto bg-background-experience">
        <div className="order-2 col-span-1 mt-2 ml-14 text-left text-gray-600 sm:-order-1 sm:ml-4">
    <a href={linkCompany} target="_blank" rel="noopener noreferrer" className="group relative block h-16 w-16 overflow-hidden rounded-lg">
        <img src={img} alt={img} className="h-full w-full object-cover text-gray-700 rounded-full" />
    </a>
</div>

        
        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4 pb-2">
            <a href={linkCompany} target="_blank" rel="noopener noreferrer" className="inline-block w-fit overflow-hidden text-text-button text-lg font-[Onest-Bold] sm:text-xl">{company}</a>
            <h3 className="text-sm font-[Onest-Bold] text-text-subtitle mt-0">{position}</h3>

            <div className="flex mt-2 flex-col space-y-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className="mr-auto rounded-full bg-background-date px-2 py-0.5 text-date-color">{dates}</div>
            </div>

            {description.map((element, key) => (
                <p key={key} className="overflow-hidden pr-7 text-base text-text-subtitle mb-0">{element}</p>
            ))}
        </div>
    </div>
  )
}