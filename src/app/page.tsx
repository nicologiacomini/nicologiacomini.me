import Header from "@/components/header";
import { Mail } from 'lucide-react'
import { FaGithub, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";
import { getAllPostIds, getMetadataPost } from "@/lib/posts";
import { ExperienceCard } from "@/components/experience-cards";


export async function generateStaticParams(): Promise<{ postId: string }[]> {
  const postIds = await getAllPostIds();
  return postIds.map(({ params }) => ({ postId: params.postId })); // Extract postId from params
}

export default async function Home() {

  const fileList = await generateStaticParams();

  // Fetch all post data
  let postList = await Promise.all(
    fileList.map(async (param) => {
      const post = await getMetadataPost(param.postId);
      return post;
    })
  );

  // Filter visible posts and sort by date
  postList = postList
    .filter((post) => post.visible)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // Slice to get only the last 3 posts
    .slice(0, 2);


  return (
      <div className="py-5 px-5 md:px-0 text-lg font-[Onest-Regular]">
      <Header/>
      <p className="text-base text-justify">
                I am Nicolò, I am working at BSC as Junior Research Engineer and, concurrently, I am pursuing the Master's Degree at UPC, in Barcelona.
                I want to use this space as a place where to share with you the most interesting and useful things I am studying.<br/>
                I am a Machine Learning and networks systems enthusiast, and Python lover. I also enjoy web and software development. I am Italian, and I&apos;m living in Barcelona.
            </p>
        <p className="mt-10">
        </p>

        <section className="mb-10">
          <h1 className="text-2xl font-[Onest-Bold] mb-1 mt-10">Work experience</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-5 mt-2" />

          <ExperienceCard company="Barcelona Supercomputer Center (BSC)" position="Junior Researcher Engineer" dates="in progress" description={["Provenance, Metadata and Reproducibility team"]} linkCompany="https://bsc.es/" img="/experience/bsc.jpg"/>
        </section>

        <section className="mb-10">
            <h1 className="text-2xl font-[Onest-Bold] mb-1">Education</h1>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-5 mt-2" />

            <ExperienceCard company="Universitat Politècnica de Catalunya (UPC)" position="Master in Innovation and Research in Informatics" dates="in progress" description={["Specialization in Computer Network and Distributed Systems"]} linkCompany="https://www.fib.upc.edu/ca" img="/experience/upc.jpg"/>

            <ExperienceCard company="University of Brescia (UNIBS)" position="Bachelor's Degree in Computer Science Engineering" dates="2023" description={["Thesis: Algorithms and Consensus Protocols in Distributed Systems","Description: This thesis is the study concerning the principles of distributed consensus and the operation of the most used algorithms such as Practical Byzantine Fault Tolerance, Paxos and Raft"]} linkCompany="https://www.unibs.it/it" img="/experience/unibs.jpg"/> 

        </section>

        <section className="mb-10">
          <h1 className="text-2xl font-[Onest-Bold] mb-1">Last posts</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-5 mt-2" />


          <div className="grid grid-cols-1 md:grid-cols-2 flex items-stretch md:space-x-4 my-2">
          {postList.map((post) => (
            <a
              key={post.title}
              href={post.url}
              className="card block max-width p-6 bg-background-button border border-border-card rounded-lg shadow-sm shadow-sm shadow-shadow-card hover:bg-hover-button mb-2 text-text-button"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {post.title}
              </h5>
                <div className="flex mt-2 flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                  <p className="mr-auto font-[Onest-Regular] rounded-full bg-background-date px-2 py-0.5 text-date-color mb-2">{post.literalDate}</p>
                </div>
              <p className="summary text-sm font-[Onest-Regular] text-text-subtitle">{post.summary}</p>
            </a>
          ))}
          </div>
        </section>

        
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
                <td className="pb-3"><a className="underline" href="https://github.com/nicologiacomini">nicologiacomini</a></td>
              </tr>
              <tr>
                <td className="pr-10 pb-3"><FaTwitter className="inline-block align-middle mr-2" />X.com:</td>
                <td className="pb-3"><a className="underline" href="https://x.com/ilnick99">@ilnick99</a></td>
              </tr>
              <tr>
                <td className="pr-10 pb-3"><FaLinkedin className="inline-block align-middle mr-2" />LinkedIn:</td>
                <td className="pb-3"><a className="underline" href="https://www.linkedin.com/in/nicolo-giacomini">Nicolò Giacomini</a></td>
              </tr>
              <tr>
                <td className="pr-10 pb-3"><FaGlobe className="inline-block align-middle mr-2" />Website:</td>
                <td className="pb-3"><a className="underline" href="https://nicologiacomini.me">nicologiacomini.me</a></td>
              </tr>
            </tbody>
          </table>
          <section className="xsm:hidden">
            <div><Mail className="inline-block align-[-3px] mr-2 w-5 h-5" />E-mail:</div>
            <div className="mb-5 pl-7"><a className="underline" href="mailto:n.giacomini99@gmail.com">n.giacomini99@gmail.com</a></div>
            <div><FaGithub className="inline-block align-middle mr-2" />GitHub:</div>
            <div className="mb-5 pl-7"><a className="underline" href="https://github.com/nicologiacomini">nicologiacomini</a></div>
            <div><FaTwitter className="inline-block align-middle mr-2" />X.com:</div>
            <div className="mb-5 pl-7"><a className="underline" href="https://x.com/ilnick99">@ilnick99</a></div>
            <div><FaLinkedin className="inline-block align-middle mr-2" />LinkedIn:</div>
            <div className="mb-5 pl-7"><a className="underline" href="https://www.linkedin.com/in/nicolo-giacomini">Nicolò Giacomini</a></div>
            <div><FaGlobe className="inline-block align-middle mr-2" />Website:</div>
            <div className="mb-5 pl-7"><a className="underline" href="https://nicologiacomini.me">nicologiacomini.me</a></div>
          </section>
        </section>


      </div>
  );
}