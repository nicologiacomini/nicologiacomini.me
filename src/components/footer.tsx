import { TiRss } from "react-icons/ti";

export default function Footer() {
    return (
      <div>
        <a className="card flex justify-between items-center max-w-[400px] mx-auto max-sm:m-5 rounded-lg border border-border-card bg-background-button shadow-sm shadow-shadow-card hover:bg-hover-button" href="https://nicologiacomini.me/rss.xml?cache_bypass=1">
        <div className="flex justify-between items-center mx-5 py-3">
          <div className="group relative h-8 w-8 rounded-lg mr-4">
            <TiRss className="h-8 w-8 object-cover" />
          </div>
          <div className="font-[Onest-Light]">
            Don't miss anything, add the RSS feed to your favourite RSS reader!
          </div>
        </div>
        </a>
        <p className="flex justify-center font-[Onest-Light] items-center mt-10 mb-28 max-w-screen-sm mx-auto align-center">&copy; {new Date().getFullYear().toString()} nicologiacomini.me</p>
      </div>
    )
  }