export default function Navbar({ links }) {
    return (
        <nav className="">
            <div className="">
                <div className="">
                    <ul className="">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}