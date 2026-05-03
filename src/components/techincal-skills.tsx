import { FaPython, FaJava, FaDocker, FaAws, FaGitAlt, FaLinux, FaReact } from "react-icons/fa";
import { Code, Server, Cloud, Brain, Layout, Terminal, Layers, Share2, Cpu, Network, GitBranch, Activity, LineChart, Database, Smile, MessageSquare, Zap, Globe, Palette } from "lucide-react";

  // Consolidated skills data to map into the bento layout
  const skillsData = [
    {
      category: "Programming",
      icon: Code,
      skills: [
        { name: "Python", icon: <FaPython size={16} /> },
        { name: "Bash", icon: <Terminal size={16} /> },
        { name: "Java", icon: <FaJava size={16} /> },
        { name: "C/C++", icon: <Code size={16} /> },
      ]
    },
    {
      category: "HPC & Distributed",
      icon: Server,
      skills: [
        { name: "COMPSs", icon: <Network size={16} /> },
        { name: "Slurm", icon: <Server size={16} /> },
        { name: "cgroup", icon: <Terminal size={16} /> },
        { name: "OpenMP", icon: <Layers size={16} /> },
        { name: "MPI", icon: <Share2 size={16} /> },
        { name: "CUDA", icon: <Cpu size={16} /> },
      ]
    },
    {
      category: "AI & Data Science",
      icon: Brain,
      skills: [
        { name: "PyTorch", icon: <Activity size={16} /> },
        { name: "Scikit-learn", icon: <LineChart size={16} /> },
        { name: "NumPy", icon: <Database size={16} /> },
        { name: "Hugging Face", icon: <Smile size={16} /> },
        { name: "LLM Integrations", icon: <MessageSquare size={16} /> },
      ]
    },
    {
      category: "Backend & Web",
      icon: Layout,
      skills: [
        { name: "FastAPI", icon: <Zap size={16} /> },
        { name: "REST APIs", icon: <Globe size={16} /> },
        { name: "SPARQL", icon: <Database size={16} /> },
        { name: "RDF", icon: <Share2 size={16} /> },
        { name: "Tailwind", icon: <Palette size={16} /> },
        { name: "React", icon: <FaReact size={16} /> },
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Docker", icon: <FaDocker size={16} /> },
        { name: "Kubernetes", icon: <Network size={16} /> },
        { name: "AWS", icon: <FaAws size={16} /> },
        { name: "Git", icon: <FaGitAlt size={16} /> },
        { name: "Linux Admin", icon: <FaLinux size={16} /> },
        { name: "CI/CD", icon: <GitBranch size={16} /> },
      ]
    }
  ];

export default function TechnicalSkills() {
    return (
        <section className="mb-14">
          <h1 className="text-2xl font-[Onest-Bold] mb-1">Technical Skills</h1>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-8 mt-2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData.map((data, idx) => (
              <div 
                key={idx} 
                // The last item spans both columns on larger screens for symmetry
                className={`px-2 pb-4 mb-2 bg-background-button border border-border-card rounded-2xl shadow-sm transition-all duration-300 group ${idx === 4 ? "md:col-span-2" : ""}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2">
                  <div className="px-2.5 bg-border-card/30 rounded-xl text-a-hover-color group-hover:scale-110 transition-transform duration-300">
                    <data.icon size={22} />
                  </div>
                  <h2 className="text-xl mb-5 font-[Onest-Bold] text-text-subtitle">
                    {data.category}
                  </h2>
                </div>
                
                {/* Skill Tags Container */}
                <div className="flex flex-wrap gap-3 mx-2">
                  {data.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="inline-flex items-center gap-2 bg-background-button border border-border-card shadow-sm text-text-button text-sm font-[Onest-Regular] px-3 py-1.5 rounded-lg hover:bg-hover-button hover:border-a-hover-color/40 transition-all cursor-default"
                    >
                      <span className="flex items-center justify-center text-a-hover-color opacity-80 group-hover:opacity-100">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
    );
}