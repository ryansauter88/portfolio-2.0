export default function Navbar({ links }) {
    return (
        <div className="nav-container">
            <ul className="nav-list">
                {links.map((link) => link)}
            </ul>
        </div>
    );
}