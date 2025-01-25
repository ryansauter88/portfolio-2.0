import GitHubLogo from '../assets/githubLogo.png'
import LinkedInLogo from '../assets/linkedinLogo.png'
import ItchIOLogo from '../assets/itch-io.png'

function Footer() {
    return(
        <>
            <h5>Thanks for your interest! Here are clickable buttons to my profiles on other platforms.</h5>
            <a href="https://github.com/ryansauter88"><img id="github" className="icon" src={GitHubLogo}></img></a>
            <a href="https://www.linkedin.com/in/ryansauter88/"><img id="linkedin" className="icon" src={LinkedInLogo}></img></a>
            <a href="https://frozen-moonlight-games.itch.io/"><img id="itch-io" className="icon" src={ItchIOLogo}></img></a>
        </>
    );
}

export default Footer