import * as React from 'react';
import Helmet from 'react-helmet';
import  { connect }  from 'react-redux'
import * as actions from '../../store/actions';
import  AboutPlaces from '../Shared/AboutPlaces';
import  LeverPosts  from './leverPosts';

interface StateProps {
    error: any,
    loading: boolean,
    allPosts: any,
    salesPosts: any,
    productPosts: any,
    marketingPosts: any
}
interface DispatchProps {
    onFetchingPost: typeof actions.fetchLeverPosts
}

interface Props extends StateProps, DispatchProps {

}

class About extends React.Component<Props, {}>  {

    public componentDidMount () {
        this.props.onFetchingPost();
    }

    public render(): JSX.Element {
        return (
            <div>
                <Helmet>
                    <title>Labelbox: About us</title>
                    <meta name="keywords" content="" />
                    <meta name="description" content="Labelbox was founded in early 2018 with a mission to enable organizations to easily adapt and train artificial intelligence." />
                    <meta name="robots" content="all" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                    <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/labelbox/website/images/main.jpg" />
                    <meta property="og:title" content="Labelbox: About us" />
                    <meta property="og:description" content="Labelbox was founded in early 2018 with a mission to enable organizations to easily adapt and train artificial intelligence." />
                </Helmet>
                {/*Hero section*/}
                <div className="hero-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mt-lg-6">
                                <h1>Accelerating global access to artificial intelligence</h1>
                                <div className="row">
                                    <div className="col-md-6"><h5>We believe that AI has the power to transform every aspect of our lives -- from healthcare to agriculture. The exponential impact of artificial intelligence will mean mammograms can happen quickly and cheaply irrespective of the limited number of radiologists there are in the world and growers will know the instant that disease hits their farm without even being there.</h5></div>
                                    <div className="col-md-6"><h5>At Labelbox, we’re building a platform to accelerate the development of this future. Rather than requiring companies to create their own expensive and incomplete homegrown tools, we’ve created a training data platform that acts as a central hub for humans to interface with AI. When humans have better ways to input and manage data, machines have better ways to learn.</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Our Values Section*/}
                {/* <section className="container mt-lg-5 py-5">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
                            <small>OUR VALUES</small>
                            <h3 className="mt-1 mb-2">Customer First</h3>
                            <h5 className="text-muted font-weight-normal">We find great pleasure in creating a magical experience for our customers.</h5>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
                            <small>OUR VALUES</small>
                            <h3 className="mt-1 mb-2">Build with love</h3>
                            <h5 className="text-muted font-weight-normal">The way we build best products is by doing what we love. </h5>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
                            <small>OUR VALUES</small>
                            <h3 className="mt-1 mb-2">Less is more</h3>
                            <h5 className="text-muted font-weight-normal">We focus on a few things and strive to making them exceptionally well. </h5>
                        </div>
                    </div>
                </section> */}

                {/*LabelBox Section*/}
                {/* <section className="container mt-lg-5 py-5">
                    <h2 className="mt-1 mb-2">Labelbox is made of</h2>
                    <p className="text-muted font-weight-normal">Use: http://gijsroge.github.io/tilt.js/</p>
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 pl-4 pr-4">
                            <div className="block">
                                <h5 className="text-dark mb-0">Ryan Quinn</h5>
                                <p>Software Engineer</p>
                                <p>Labelbox is a collaborative annotation platform for artificial intelligence applications.</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/*Partner-carousel Section*/}
                <div className="partner-wrap">
                    <div className="container">
                        <h2 className="text-dark mb-5">Places we have worked in the past</h2>
                        <AboutPlaces />
                    </div>
                </div>

                {/*Join US*/}
                <section className="container mt-lg-5 py-5">
                        <h2 className="text-dark mb-3">Join us</h2>
                        <p>In addition to these benefits, we are always open to accommodating special needs and requirements.</p>
                        <ul>
                          <li>Health, dental, and vision benefits </li>
                          <li>401(k) retirement plan </li>
                          <li>Flexible spending account </li>
                          <li>Commuter benefits </li>
                          <li>Flexible work hours and location </li>
                          <li>Open vacation policy</li>
                        </ul>
                      <br/>
                        <ul className="nav border-0 mb-5 nav-tabs pills-tab" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active"  data-toggle="tab" href="#home">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  data-toggle="tab" href="#marketing">Marketing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  data-toggle="tab" href="#products">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  data-toggle="tab" href="#sales">Sales</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                            {
                                this.props.allPosts.map((post: any, index: number) =>
                                    <LeverPosts key={index} text={post.text} categories={post.categories} applyUrl={post.applyUrl} />
                                )
                            }
                            </div>
                        </div>
                        <div className="tab-pane" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                                {
                               this.props.marketingPosts.map((post: any, index: number) =>
                                    <LeverPosts key={index} text={post.text} categories={post.categories} applyUrl={post.applyUrl} />
                                )
                            }
                        </div>
                        <div className="tab-pane" id="products" role="tabpanel" aria-labelledby="products-tab">
                            {
                                this.props.productPosts.map((post: any, index: number) =>
                                    <LeverPosts key={index} text={post.text} categories={post.categories} applyUrl={post.applyUrl} />
                                )
                            }
                        </div>
                        <div className="tab-pane" id="sales" role="tabpanel" aria-labelledby="sales-tab">
                            {
                                this.props.salesPosts.map((post: any, index: number) =>
                                    <LeverPosts key={index} text={post.text} categories={post.categories} applyUrl={post.applyUrl} />
                                )
                            }
                        </div>
                        </div>
                </section>

                {/*Investors Section*/}
                <section className="container mt-lg-5 py-5 investors">
                        <h2 className="text-dark mb-3">Investors</h2>
                        <div className="row text-center">
                            <div className="col-lg-4 col-md-6 pl-3 pr-3">
                                <div className="block">
                                    <img src="images/kleiner.png" width="250px" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-3 pr-3">
                                <div className="block">
                                     <img src="images/Gradient-Ventures-Logo.png"  width="250px" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-3 pr-3">
                                <div className="block">
                                    <img src="images/Logo-black.tiff.png"  width="65px" alt="" />
                                </div>
                            </div>
                        </div>
                </section>
            </div>
         );
    }
}


const mapStateToProps = (state: any): StateProps => {
    return {
        allPosts: state.lever.allPosts,
        error: state.lever.error,
        loading: state.lever.loading,
        marketingPosts: state.lever.marketingPosts,
        productPosts: state.lever.productPosts,
        salesPosts: state.lever.salesPosts
    };
};



const mapDispatchToProps = (dispatch : any): DispatchProps => {
    return {
        onFetchingPost: () => dispatch( actions.fetchLeverPosts() ),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
