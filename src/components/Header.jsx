// TODO: look up how to make an image slide show (and how to make sure the text stays over it, probably just div with bg img that switches)
import scenicwalkway from '../assets/scenicwalkway.jpg'

function Header() {
    return (
        <>
            <img className="head-img" src={scenicwalkway}/>
            <div className="floating-container">
                <h1>Ryan Sauter</h1>
                <p>Gameplay Programmer</p>
            </div>
        </>
    );
}

export default Header