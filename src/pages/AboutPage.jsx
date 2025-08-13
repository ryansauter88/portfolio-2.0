// TODO: add headshot or avatar of some kind
import HeaderImage from '../assets/HeaderImage.jpg'
import HeaderImage2 from '../assets/PFP5.jpg'

function AboutPage() {
    return (
        <>
            <h1>About Me</h1>
            <div className='image-container'>
                <img className="headshot" src={HeaderImage}/>
                <img className="headshot" src={HeaderImage2}/>
            </div>
            <p>My name is Ryan Sauter, and I am an aspiring Programmer.</p>
            <p>I am 25 years old. I am currently located in Philadelphia and open for work. I have a passion for esports, since 2017 I have competed, run tournaments, created content, coached, and provided commentary for tournament streams. My spare time is spent running, reading, exploring the city with my lovely girlfriend, and tending to my tiny windowsill garden.</p>
            <p>I am actively looking for work. My expertise is within custom website development, particularly the MERN stack. (I coded this website myself!) I am also familiar with 2D projects, specifically programming in Unity and Godot with C#.</p>
            <p></p>
        </>
    );
}

export default AboutPage
