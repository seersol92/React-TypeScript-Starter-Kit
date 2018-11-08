import * as React from 'react';
import * as ReactBodymovin from 'react-bodymovin'
import * as animation from './hero.json'
import { Link } from 'react-router-dom';

    const bodymovinOptions = {
        animationData: animation,
        autoplay: true,
        loop: true,
        prerender: true,
    }
    const HeroBanner = () => {
        return (
            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <a target="_blank" href="https://medium.com/labelbox/introducing-best-in-class-image-annotation-tools-for-computer-vision-applications-de5da8931d6e" className="introducing-label text-dark"><span className="badge badge-pill badge-success mr-2">NEW</span>Introducing pixelwise annotation tools</a>
                            <h1>A new way to create and manage training data</h1>
                            <h4>Labelbox is a collaborative annotation platform for artificial intelligence applications.</h4>
                            <a href="https://app.labelbox.com" className="btn btn-success text-uppercase">create account</a>
                            <Link className="btn btn-outline-success text-uppercase ml-2" to={'sales'}>Contact Sales </Link>
                          </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <ReactBodymovin options={bodymovinOptions} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default HeroBanner;
