// TODO: insert cards, make sure they fit nice
import ProjectCard from '../components/ProjectCard'
import projectData from '../utils/projectData';

function PortfolioPage() {
    const makeCard = (object, index) => {
        return <ProjectCard key={index} projObj={object}/>
    }

    return (
        <>
            <h1>Portfolio</h1>
            <div className="port-container">
                {projectData.map(makeCard)}
            </div>
        </>
    );
}

export default PortfolioPage