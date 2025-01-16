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
            <p>My name is Ryan Sauter, and I am an aspiring Gameplay Programmer.</p>
            <p>I am 25 years old. I am currently located in Philadelphia and open for work. I have a passion for esports, since 2017 I have been competed, run tournaments, created content, coached, and provided commentary for tournament streams. My spare time is spent running, reading, exploring the city with my lovely girlfriend, and tending to my tiny windowsill garden.</p>
            <p>I am open and actively looking for paid Game Development work. My expertise is within 2D projects, specifically programming in Unity and Godot with C#. I am also familiar with HTTP, Server-side, and database technologies. (I coded this website myself!)</p>
            <p></p>
            <h3>My Game Dev Journey:</h3>
            <p>I finally satiated my curiosity on how to actually create the media I've spent most of my time consuming when my closest friend asked me to help for a game design class he took as an elective in 2022. My coding knowledge from the Engineering track at Purdue came in handy, and eventually we had a prototype and he moved on to plan his wedding. Over the next couple years, several phases came and went where I toyed around with projects - game jams, tutorials, potential solo endeavors with promise. Although the tech layoffs hit me, I spent my time in the interim working on a game jam run by my local community. Somehow, I found myself at a Game Dev Showcase at a small local conference where I was receiving praise for leading the project. Gratifying would be an understatement for how I felt in that moment, seeing how (although the other projects there showcased much more impressive talent) I could match up to these other creatives. Unfortunately, life caught up with me, and I told myself that I should put down Game Development for a bit and see if it's something I really want to stick with. After some months, I'm feeling the itch and reaching the understanding that my long term goal is to become a part of the games industry, utilizing my problem solving engineering background, analytic esports background, and technical web development background.
            </p>
        </>
    );
}

export default AboutPage