import  * as React from 'react';
import { Link } from 'react-router-dom';

    const HeroBanner = () => {
        return (
            <div className="container">
                <div className="row col-10 offset-lg-2">
                    <div className="jumbotron mt-5">
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <Link className="btn btn-primary btn-lg" to={''} role="button">Learn more</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

export default HeroBanner;
