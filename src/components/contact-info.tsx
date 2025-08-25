import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function ContactInfo() {
    return (
        <section className="mb-10">
          <h1 className="text-2xl font-[Onest-Bold] mb-1 mt-10">Contact Information</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-5 mt-2" />
          <table className="max-xsm:hidden">
            <tbody>
              <tr>
                <td className="pr-10 pb-3"><Mail className="inline-block align-[-3px] mr-2 w-5 h-5" />E-mail:</td>
                <td className="pb-3"><a className="underline" href="mailto:n.giacomini99@gmail.com">n.giacomini99@gmail.com</a></td>
              </tr>
              <tr>
                <td className="pr-10 pb-3"><FaGithub className="inline-block align-middle mr-2" />GitHub:</td>
                <td className="pb-3"><a className="underline" href="https://github.com/nicologiacomini" target="_blank" rel="noopener noreferrer">nicologiacomini</a></td>
              </tr>
              <tr>
                <td className="pr-10 pb-3"><FaLinkedin className="inline-block align-middle mr-2" />LinkedIn:</td>
                <td className="pb-3"><a className="underline" href="https://www.linkedin.com/in/nicolo-giacomini" target="_blank" rel="noopener noreferrer">Nicolò Giacomini</a></td>
              </tr>
              <tr>
                <td className="pr-10 pb-3"><FaGlobe className="inline-block align-middle mr-2" />Website:</td>
                <td className="pb-3"><a className="underline" href="https://nicologiacomini.me" target="_blank" rel="noopener noreferrer">nicologiacomini.me</a></td>
              </tr>
            </tbody>
          </table>
          <section className="xsm:hidden">
            <div><Mail className="inline-block align-[-3px] mr-2 w-5 h-5" />E-mail:</div>
            <div className="mb-5 pl-7"><a className="underline" href="mailto:n.giacomini99@gmail.com">n.giacomini99@gmail.com</a></div>
            <div><FaGithub className="inline-block align-middle mr-2" />GitHub:</div>
            <div className="mb-5 pl-7"><a className="underline" href="https://github.com/nicologiacomini" target="_blank" rel="noopener noreferrer">nicologiacomini</a></div>
            <div><FaLinkedin className="inline-block align-middle mr-2" />LinkedIn:</div>
            <div className="mb-5 pl-7"><a className="underline" href="https://www.linkedin.com/in/nicolo-giacomini" target="_blank" rel="noopener noreferrer">Nicolò Giacomini</a></div>
            <div><FaGlobe className="inline-block align-middle mr-2" />Website:</div>
            <div className="mb-5 pl-7"><a className="underline" href="https://nicologiacomini.me" target="_blank" rel="noopener noreferrer">nicologiacomini.me</a></div>
          </section>
        </section>
    )
}