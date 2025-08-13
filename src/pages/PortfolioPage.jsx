import ProjectCard from '../components/ProjectCard'
import ProjectCard2 from '../components/ProjectCard2'
import projectData from '../utils/projectData';
import projectData2 from '../utils/projectData2';
import image1 from '../assets/REACTion.png';
import image2 from '../assets/weatherStock.jpg';
import image3 from '../assets/DemoSwap.png';
import image4 from '../assets/socialNetworkStock.jpg';
import image5 from '../assets/ecommerceStock.jpg';
import image6 from '../assets/screenshot3.jpg';
import image7 from '../assets/title_background_2.png'
import image8 from '../assets/TitleLogo.png'
import image9 from '../assets/runaway_idle_11.png'
import image10 from '../assets/rainbowSplashBackground.jpg'

const images = [image1,image2,image3,image4,image5,image6]
const images2 = [image7, image8, image9, image10]

function PortfolioPage() {
    const makeCard = (object, index) => {
        return <ProjectCard key={index} projObj={object} imgSrc={images[index]}/>
    }
    const makeCard2 = (object, index) => {
        return <ProjectCard2 key={index} projObj={object} imgSrc={images2[index]}/>
    }

    return (
        <>
            <h1>Portfolio</h1>
            <h3>Website Projects</h3>
            <div className="port-container">
                {projectData.map(makeCard)}
            </div>
            <h3>Game Projects</h3>
            <div className="port-container">
                {projectData2.map(makeCard2)}
            </div>
        </>
    );
}

export default PortfolioPage