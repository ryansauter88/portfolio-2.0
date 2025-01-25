import { Link } from 'react-router-dom';
import githubLogo from '../assets/githubLogo.png'

export default function ProjectCard2(props) {

    return(
        <div key={props.key} className="proj-card">
            <img key={props.key} src={props.imgSrc} className="proj-img"/>
            <div key={props.key} className="card-float">
                <Link to={props.projObj.deployLink}>{props.projObj.projName}</Link>
                <a href={props.projObj.repoLink}><img className="card-icon" src={githubLogo}></img></a>
                <p>{props.projObj.techUsed}</p>
            </div>
        </div>
    );
}