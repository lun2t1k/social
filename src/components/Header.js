import logo from '../Social-Logo.png';

export default function Header() {
    return (
        <header>
            <div className="container px-3 mx-auto">
                <div className="header-wrap bg-green-300">
                    <img src={logo} width="100" height="100" alt="SOCIAL" />
                </div>
            </div>
        </header>
    );
} 