import  * as React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-muted"> © Labelbox, Inc<br />
                            Made with ♥ in California </p>
                    </div>
                    <div className="col-md-2">
                        <h5>PRODUCT</h5>
                        <ul>
                          <li><Link to={'product'}>Features</Link></li>
                            <li><Link to={'pricing'}>Pricing</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>COMPANY</h5>
                        <ul className="">
                            <li><Link to={'about'}>About</Link></li>
                            <li><a target="_blank" href="https://medium.com/labelbox">Blog</a></li>
                            <li><a target="_blank" href="https://jobs.lever.co/labelbox/">Jobs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>RESOURCES</h5>
                        <ul>
                            <li><Link to={'/buy-vs-build'}>Build & Buy</Link></li>
                            <li><a target="_blank" href="https://support.labelbox.com">Support</a></li>
                            <li><a target="_blank" href="https://support.labelbox.com/docs/privacy-policy">Privacy Policy</a></li>
                            <li><a target="_blank" href="https://support.labelbox.com/docs/terms-of-use">Terms of Use</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
   )
}

export default Footer;
