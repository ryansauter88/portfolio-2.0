export default function ProjectCard(props) {
    return(
        <div key={props.index} className="proj-card">
            <img src={props.projObj.imgSrc} className="proj-img"/>
            <div className="card-float">
                <a href={props.projObj.deployLink}>{props.projObj.projName}</a>
                <a href={props.projObj.repoLink}><img className="card-icon" src="./src/assets/githubLogo.png"></img></a>
                <p>{props.projObj.techUsed}</p>
            </div>
        </div>
    );
}