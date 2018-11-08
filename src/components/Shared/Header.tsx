import  * as React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    public render(): JSX.Element {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="nav-link" to={''}>React Typescript Starter</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={''}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'about'}>About</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
