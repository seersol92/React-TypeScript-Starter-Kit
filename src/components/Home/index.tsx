import * as React from 'react';
import Helmet from "react-helmet";
import CarouselSlider from '../Shared/CarouselSlider';
import CreateAccount from '../Shared/CreateAccount';
import Developers from '../Shared/Developers';
import Testimonial from '../Shared/Testimonial';
import HeroBanner from './HeroBanner';
import './index.css';

class Home extends React.Component {
     public render(): JSX.Element {
        return (
            <div>
                <Helmet>
                    <title>Labelbox: A new way to create and manage training data</title>
                    <meta name="description" content="Labelbox is an enterprise ready training data creation and management platform for artificial intelligence applications" />
                    <meta name="robots" content="all" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                    <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/labelbox/website/images/hero.png" />
                    <meta property="og:title" content="Labelbox: A new way to create and manage training data" />
                    <meta property="og:description" content="Labelbox is an enterprise ready training data creation and management platform for artificial intelligence applications" />

                </Helmet>
                <HeroBanner />
                <div className="partner-wrap">
                    <div className="container">
                        {/* <h4 className="mb-5">Trusted by the world’s most innovative businesses - big & small</h4> */}
                        <CarouselSlider />
                    </div>
                </div>
                <section className="annotations">
                    <div className="container">
                        <div className="text-left">
                          {/* <small className="text-muted mb-3 d-block">ANNOTATIONS</small> */}
                            <h2 className="mb-5">Label data with advanced annotation tools</h2>
                            <div className="row justify-content-left">
                                <div className="col-lg-8">
                                    <p className="text-muted mb-4">You need high quality tools to most efficiently capture the human intent . Labelbox has the most powerful  annotation interface with a suite of intelligent tools to teach artificial intelligence about fashion styles to colon tumors. </p>
                                </div>
                                <div className="col-12">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="Bounding" role="tabpanel" aria-labelledby="home-tab">
                                        <img src="images/rectangle.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="tab-pane" id="Polygons" role="tabpanel" aria-labelledby="profile-tab">
                                            <img src="images/polygons.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="tab-pane" id="Pixelwise" role="tabpanel" aria-labelledby="messages-tab">
                                            <img src="images/pixelwise.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="tab-pane" id="Classifications" role="tabpanel" aria-labelledby="settings-tab">
                                            <img src="images/classifications.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="tab-pane" id="Custom" role="tabpanel" aria-labelledby="settings-tab">
                                        <img src="images/custom.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <ul className="nav mt-5 round-tab mb-5 text-center nav-tabs border-0 justify-content-left" id="myTab" role="tablist">
                                    <li className="nav-item">
                                            <a className="nav-link pl-0 active" data-toggle="tab" href="#Bounding">
                                            <span style={{"backgroundImage": "url(images/bounding.svg)"}} />  Bounding Boxes

                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#Polygons">
                                            <span style={{"backgroundImage": "url(images/polygons.svg)" }}/>
                                            Polygons
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#Pixelwise">
                                            <span style={{"backgroundImage": "url(images/pixelwise.svg)"}} />
                                            Pixelwise
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#Classifications">
                                            <span style={{"backgroundImage": "url(images/classification.svg)"}} />
                                            Classifications
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#Custom">
                                            <span style={{"backgroundImage": "url(images/customhtml.svg)"}} />
                                            Custom HTML
                                        </a>
                                    </li>
                                    </ul>
                    {/* <p className="text-muted">Classification and segmentation with powerful image annotation tools: bounding boxes, polygon, point, line, brush, and superpixel.</p>
                                    <a href="">See Documentation</a>  */}

                                  </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mt-lg-5 py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2"> <img src="images/collaboration.svg" style={{"width":"80%"}} className="img-fluid" alt="" /> </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                          {/* <small>WORKFLOWS</small> */}
                            <h2 className="mt-3 mb-4">One place for data labeling, data management, and data science</h2>
                            <p className="text-muted">Unify in-house and external labeling activities with flexible labeling interfaces and work distribution tools. Manage all of your labeled data in one place. Supercharge data science work with pre-built integrations and the latest ML techniques.</p>
                            <a href={'product'}>Learn More</a>
                        </div>
                    </div>
                </section>

                <section className="container mt-lg-5 py-5">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                      {/* <small>COLLABORATION</small> */}
                        <h2 className="mt-3 mb-4">Create better training data</h2>
                        <p className="text-muted">An ML model is only as good as its training data.  Take control of training data quality through collaborative labeling and quality assurance processes.</p>
                        {/* <a href=" " >See  our provider network</a>  */}
                      </div>
                    <div className="col-lg-6 text-right"> <img src="images/workflows.svg" className="img-fluid" alt="" /> </div>
                </div>
                </section>


                <section className="container mt-lg-5 py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 order-2"> <img src="images/brain.svg" className="img-fluid" style={{"width":"80%"}}  alt="" /> </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                          {/* <small>WORKFLOWS</small> */}
                            <h2 className="mt-3 mb-4">Spend more time building AI</h2>
                            <p className="text-muted">Say goodbye to those spreadsheets and python scripts. Labelbox is a complete set of tools to create and manage training data. Now you can get back to creating the products your customers want.</p>
                        </div>
                    </div>
                </section>


                {/*Extensible and Developer Section*/}
                <Developers />
                {/*Testimonial Section*/}

                <section className="my-5 py-lg-5 container">
                    <div className="row">
                        <div className="col-lg-6 border-right  pr-lg-5">
                            <span className="d-block rounded-circle bg-light mb-3" style={{"width": "60px","height": "60px", "background": "radial-gradient(30.50px at 50% 50%, #C0A70D 0%, #FEEA6E 100%)"}}><img src="images/knowledge.svg" className="img-fluid" alt="" /></span>
                            <h2>Manage institutional knowledge</h2>
                            <p>Data labeling is just a piece of larger challenge of creating and managing your institutional knowledge. Your models will drive the future of your business. </p>
                        </div>
                        <div className="col-lg-6 pl-lg-5 ">
                            <span className="d-block rounded-circle bg-light mb-3" style={{"width": "60px","height": "60px", "background": "radial-gradient(30.50px at 50% 50%, #B29090 0%, #FF7D7D 100%)"}}><img src="images/roi.svg" className="img-fluid" alt="" /> </span>
                            <h2>Maximize return on AI investment</h2>
                            <p>Building machine learning applications is resource intensive. Yet, most of these resources are used to build and manage tools and infrastructure. Labelbox unifies training data creation, storage and management in one place, providing your team a robust foundation to focus on creating business value.</p>
                        </div>
                    </div>
                </section>
                <Testimonial />
                {/*Get Started Create Account Section*/}
                <CreateAccount />

                <script type="text/javascript">
                  mixpanel.track("[LP] Visited: index");
                </script>
            </div>
        );
    }
}

export default Home;
