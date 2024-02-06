import githubLogo from '../assets/githubLogo.png'

export default function ProjectCard(props) {

    return(
        <div key={props.key} className="proj-card">
            <img key={props.key} src={props.imgSrc} className="proj-img"/>
            <div key={props.key} className="card-float">
                <a href={props.projObj.deployLink}>{props.projObj.projName}</a>
                <a href={props.projObj.repoLink}><img className="card-icon" src={githubLogo}></img></a>
                <p>{props.projObj.techUsed}</p>
            </div>
        </div>
    );
}