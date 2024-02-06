import ProjectCard from '../components/ProjectCard'
import projectData from '../utils/projectData';
import image1 from '../assets/weatherStock.jpg';
import image2 from '../assets/DemoSwap.png';
import image3 from '../assets/socialNetworkStock.jpg';
import image4 from '../assets/ecommerceStock.jpg';
import image5 from '../assets/screenshot3.jpg';
import image6 from '../assets/noteTaker.png';
const images = [image1,image2,image3,image4,image5,image6]

function PortfolioPage() {
    const makeCard = (object, index) => {
        return <ProjectCard key={index} projObj={object} imgSrc={images[index]}/>
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