// TODO: look up how to make an image slide show (and how to make sure the text stays over it, probably just div with bg img that switches)
import HeaderImage from '../assets/HeaderImage.jpg'

function Header() {
    return (
        <>
            <img className="head-img" src={HeaderImage}/>
            <div className="floating-container">
                <h1>Ryan Sauter</h1>
                <p>Agile full-stack developer.</p>
            </div>
        </>
    );
}

export default Header