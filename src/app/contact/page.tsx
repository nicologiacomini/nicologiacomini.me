import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Nicolò Giacomini | Contact'
  }

export default function Contact() {
    return (
        <div className="container mx-auto">
        <div className="max-w-md mx-auto rounded-md">
            <div className="text-center">
                <h1 className="my-10 text-3xl font-[Onest-Black]">
                    Contact Me
                </h1>
                <p className="text-justify mx-5">
                    If you find a mistake or imprecision, or you just want to get in touch with me, fill up the form below to send me a message. 😄
                </p>
                </div>
                <div className="m-7">
                <form action="https://api.web3forms.com/submit" method="POST" id="form">
                    <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY} />
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <div className="mb-6">
                        <label form="name" className="block mb-2 font-[Onest-Bold] text-sm">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-text-subtitles border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label form="email" className="block mb-2 font-[Onest-Bold] text-sm">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-text-subtitles border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label form="phone" className="text-sm mb-2 font-[Onest-Bold]">Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required className="w-full px-3 py-2 placeholder-text-subtitles border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <label form="message" className="block mb-2 font-[Onest-Bold] text-sm">Your Message</label>
                        <textarea rows={3} name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-text-subtitles border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-500" required></textarea>
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full px-3 py-4 text-background-button font-[Onest-Bold] rounded-md focus:bg-text-subtitle focus:outline-none bg-a-hover-color hover:bg-submit-hover-color">
                            Send Message
                        </button>
                        <p className="text-xs mt-2">Powered by <a href="https://web3forms.com/"><u>Web3Forms</u></a></p>
                    </div>
                </form>
            </div>
        </div>
  </div>
    )
}