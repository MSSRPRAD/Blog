import './ProjectCard.css'

interface ProjectCardProps {
    name: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    note: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    return (
      <div className="bg-cyan-200 rounded-2xl overflow-auto m-5 lg:w-2/5 border-black border-solid">
        <div className="p-4">
          <h3 className="text-2xl text-center font-semibold text-violet-800">{props.name}</h3>
          <p className="">{props.description}</p>
          <p className="text-2xl text-center font-semibold text-violet-800">Tech Stack:</p>
          <ul className="list-disc">
            {props.techStack.map((tech) => (
                <li key={tech} className='text-2xl'>{tech}</li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center mt-4">
          <a
            href={props.githubUrl}
            className="text-center mt-4 inline-block bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            View on GitHub
          </a>
          <div className='container'>
            <p className="text-2xl text-center font-semibold text-red-400">Note: {props.note}</p>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;