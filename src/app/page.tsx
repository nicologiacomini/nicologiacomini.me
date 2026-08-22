import Header from "@/components/header";
import { getAllPostIds, getMetadataPost } from "@/lib/posts";
import { ExperienceCard } from "@/components/experience-cards";
import ContactInfo from "@/components/contact-info";
import TechnicalSkills from "@/components/techincal-skills";
import { Button } from "@/components/ui/button";


export async function generateStaticParams(): Promise<{ postId: string }[]> {
  const postIds = await getAllPostIds();
  return postIds.map(({ params }) => ({ postId: params.postId })); // Extract postId from params
}

export default async function Home() {

  const fileList = await generateStaticParams();

  let postList = await Promise.all(
    fileList.map(async (param) => {
      const post = await getMetadataPost(param.postId);
      return post;
    })
  );

  postList = postList
    .filter((post) => post.visible)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);


  return (
      <div className="py-5 px-5 md:px-0 text-lg font-[Onest-Regular]">
        <Header/>

        <section className="mb-10">
            <p className="text-base text-justify mb-4">
              Ciao, I&apos;m Nicolò! I&apos;m an Italian Computer Engineer based in Barcelona, currently working as an ML Engineer at Smadex, where I focus on MLOps and the reliability, observability, and performance of machine learning systems.
            </p>

            <p className="text-base text-justify">
              Following my Master&apos;s at UPC, I worked as a Research Engineer at the Barcelona Supercomputing Center (BSC), where I focused on distributed systems, HPC, and reproducibility. My work involved enhancing the <a href="https://compss-doc.readthedocs.io/en/stable/" className="font-semibold underline">COMPSs framework</a> with metadata capture and provenance capabilities, contributing to <a href="https://github.com/crs4/provenance-storage" className="font-semibold underline">Provenance Storage</a>, and working with technologies such as Docker, REST APIs, and <a href="https://www.researchobject.org/ro-crate/" className="font-semibold underline">RO-Crate</a>.
            </p>

            <p className="text-base text-justify">
              I&apos;m a machine learning and networks systems enthusiast, and Python lover. I also enjoy web and software development. I&apos;m using this space to share the most interesting things I&apos;m working on and learning along the way.
            </p>

          <div className="w-full flex justify-center">
            <div className="navbar font-[Onest-Regular] rounded-lg inline-flex justify-center items-center gap-5 px-2 py-0 h-16 border-border-card">

              <a href='#contact'>
                <Button className="flex align-items justify-center px-8 py-2 text-sm text-background-button font-[Onest-Bold] rounded-md bg-a-hover-color hover:bg-submit-hover-color">
                  Get in touch
                </Button>
              </a>

              <a href="https://drive.google.com/file/d/1_juLGtpvpLGqs5r6wWnT4XLwrdCJTKaC/view?usp=sharing">
                <Button className="flex align-items justify-center px-8 py-2 text-sm text-background-button font-[Onest-Bold] rounded-md bg-download-cv-button hover:bg-download-cv-button-hover">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h1 className="text-2xl font-[Onest-Bold] mb-1 mt-10">Work experience</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-5 mt-2" />

          <ExperienceCard company="Smadex" position="ML Engineer" dates="June 2026 - in progress" description={["**Group:** ML department", "**Team:** MLOps", "**Description:** Monitoring and ensuring the performance, reliability, and observability of ML models and their infrastructure. Designing and implementing ML-specific metrics, alerts, and monitoring systems to proactively detect performance degradation and infrastructure issues."]} linkCompany="https://smadex.com/" img="/experience/smadex.jpeg"/>

          <ExperienceCard company="Barcelona Supercomputer Center (BSC)" position="Junior Researcher Engineer" dates="June 2024 - June 2026" description={["**Group:** Workflow and Distributed Computing", "**Team:** Provenance, Metadata and Reproducibility", "**Description:** Working on enhancing reproducibility and traceability in HPC environments by developing metadata capture, storage, and workflow integration within the COMPSs framework"]} linkCompany="https://bsc.es/" img="/experience/bsc.jpg"/>
        </section>

        <section className="mb-10">
            <h1 className="text-2xl font-[Onest-Bold] mb-1">Education</h1>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-5 mt-2" />

            <ExperienceCard company="Universitat Politècnica de Catalunya (UPC)" position="Master in Innovation and Research in Informatics" dates="September 2023 - January 2026" 
            description={["**Specialization:** Computer Network and Distributed Systems", "**Thesis:** [Metadata Capture, Knowledge Extraction, and Predictive Analysis in HPC environment](https://hdl.handle.net/2117/460572)","**Description:** Optimize workflow execution in HPC environments by developing a profiling tool implemented in COMPSs framework, contributing to Provenance Storage architecture improvement, and studying different ML models for predicting execution time"]}
            linkCompany="https://www.fib.upc.edu/ca" img="/experience/upc.jpg"/>

            <ExperienceCard company="Norwegian University of Science and Technology (NTNU)" position="Exchange Student (Erasmus+)" dates="January 2025 - June 2025" description={["**Coursework:** Advanced Software Engineering, Real-Time Programming, Applied Cryptography and Network Security"]} linkCompany="https://www.ntnu.edu/" img="/experience/ntnu.svg"/>

            <ExperienceCard company="University of Brescia (UNIBS)" position="Bachelor's Degree in Computer Science Engineering" dates="September 2018 - March 2023" description={["**Thesis:** Algorithms and Consensus Protocols in Distributed Systems","**Description:** This thesis is the study concerning the principles of distributed consensus and the operation of the most used algorithms such as Practical Byzantine Fault Tolerance, Paxos and Raft"]} linkCompany="https://www.unibs.it/it" img="/experience/unibs.jpg"/> 

        </section>

        <TechnicalSkills />

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
        <ContactInfo />
      </div>
  );
}