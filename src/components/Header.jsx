// TODO: look up how to make an image slide show (and how to make sure the text stays over it, probably just div with bg img that switches)
import scenicwalkway from '../assets/l1_level1bg_1.png'

function Header() {
    return (
        <>
            <div className="head-img">
                <div className="floating-container">
                    <h1>Ryan Sauter</h1>
                    <p>Gameplay Programmer</p>
                </div>
            </div>
        </>
    );
}

export default Header