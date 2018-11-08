import * as React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    public render(): JSX.Element {
        return (
            <header className="globalNav noDropdownTransition">
                <div className="container">
                    <ul className="navRoot">
                        <li className="navSection logo">
                            <Link className="rootLink item-home colorize" to={'/'}>
                                <img src="images/labelbox_logo.svg" alt="" />
                            </Link>
                        </li>
                        <li className="navSection primary">
                            <Link to={'product'} className="rootLink item-products colorize"> Product </Link>
                            <a className="rootLink item-developers hasDropdown colorize" data-dropdown="solutions"> Solutions </a>
                            <a className="rootLink item-company hasDropdown colorize" data-dropdown="company"> Company </a>
                            <Link to={'pricing'} className="rootLink item-company colorize"> Pricing</Link>
                        </li>
                        <li className="navSection secondary">
                            <a className="rootLink item-support colorize" href="https://support.labelbox.com"> Support </a>
                            <a className="rootLink item-dashboard colorize" data-adroll-segment="submit_two" href="https://app.labelbox.com"> Sign in </a>
                        </li>
                        <li className="navSection mobile">
                            <a className="rootLink item-mobileMenu colorize" href="javascript:void(0)">
                            <h2>Menu</h2>
                            </a>
                            <div className="popup">
                                <div className="popupContainer">
                                    <a className="popupCloseButton" href="javascript:void(0)">Close</a>

                                    <div className="mobileProducts">
                                        <h4>Product</h4>
                                        <div className="mobileProductsList">
                                            <ul>
                                              <li><Link className="linkContainer" to={'product'}>
                                                  Features</Link></li>

                                            </ul>
                                            <ul>

                                            </ul>

                                        </div>
                                    </div>



                                    <div className="mobileProducts">
                                        <h4>Solutions</h4>
                                        <div className="mobileProductsList">
                                            <ul>
                                                <li><Link className="linkContainer" to={'geospatial-industry'}>Geospatial </Link></li>

                                            </ul>
                                            <ul>

                                              <li><Link className="linkContainer" to={'industrial-industry'}>Industrial </Link></li>

                                            </ul>
                                        </div>
                                    </div>


                                    <div className="mobileSecondaryNav">
                                        <ul>
                                          <li><Link className="linkContainer" to={'pricing'}>Pricing </Link></li>

                                            <li><a className="item-about" href={'about'}>About Labelbox</a></li>
                                            <li><a className="item-blog" href="https://medium.com/labelbox">Blog</a></li>
                                        </ul>
                                        <ul>
                                          <li><a className="item-gallery" href="https://medium.com/labelbox/tagged/labelbox-success-stories">Success Stories</a></li>
                                          <li><a className="item-documentation" href="https://support.labelbox.com">Support</a></li>
                                        </ul>
                                    </div>

                                    <a className="mobileSignIn" data-adroll-segment="submit_two" href="https://app.labelbox.com">Sign in </a> </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="dropdownRoot">
            <div className="dropdownBackground" style={{"transform":"translateX(452px) scaleX(0.707692) scaleY(1.1075)"}}>
                <div className="alternateBackground" style={{"transform": "translateY(255.53px)"}} />
            </div>
            <div className="dropdownArrow" style={{"transform": "translateX(636px) rotate(45deg)"}} />
            <div className="dropdownContainer" style={{"transform": "translateX(452px); width: 368px; height: 443px"}}>

                <div className="dropdownSection active" data-dropdown="solutions">
                    <div className="dropdownContent">
                        <ul className="linkGroup linkList developersGroup">
                            <li><Link className="linkContainer item-apiReference" to={'geospatial-industry'}>

                                <h3 className="linkTitle linkIcon">
                                    {/* <svg width="17" height="17">
                                        <path d="M2 15h13M2 11h13M2 7h13M2 3h13" fill="none" stroke="#6772e5" className="hover-strokeDark" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> */}
                                    Geospatial</h3>
                                </Link></li>

                            <li><Link className="linkContainer item-apiStatus" to={'industrial-industry'}>
                                <h3 className="linkTitle linkIcon">
                                    {/* <svg width="17" height="17">
                                        <path d="M1 9h2.95l3-6.5 3 12 3-5.45L16 9" fill="none" stroke="#6772e5" className="hover-strokeDark" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> */}
                                    Industrial</h3>
                                </Link></li>

                        </ul>
                    </div>
                </div>
                <div className="dropdownSection right" data-dropdown="company">
                    <div className="dropdownContent">
                        <ul className="linkGroup linkList companyGroup">
                            <li><a className="linkContainer item-about" href={'about'}>
                                <h3 className="linkTitle linkIcon">
                                    {/* <svg width="17" height="17">
                                        <path fill="#6772E5" className="hover-fillDark" d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z" />
                                    </svg> */}
                                    About Labelbox</h3>
                                </a></li>

                            <li><a className="linkContainer" target="_blank" href="https://medium.com/labelbox/tagged/labelbox-success-stories">
                                <h3 className="linkTitle linkIcon">
                                    {/* <svg width="17" height="17">
                                        <path fill="#87BBFD" className="hover-fillLight" d="M2 16a1 1 0 0 1-1-1V9a4 4 0 0 1 8 0v7H2zm3-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        <path fill="#6772E5" className="hover-fillDark" d="M15 16H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55a2.5 2.5 0 0 1 4.9 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" />
                                        <path fill="#87BBFD" className="hover-fillLight" d="M11 12h2v4h-2v-4z" />
                                    </svg> */}
                                    Success Stories</h3>
                                </a></li>

                            <li><a className="linkContainer item-customers" href="https://medium.com/labelbox">
                                <h3 className="linkTitle linkIcon">
                                    {/* <svg width="17" height="17">
                                        <path fill="#87BBFD" className="hover-fillLight" d="M2 16a1 1 0 0 1-1-1V9a4 4 0 0 1 8 0v7H2zm3-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        <path fill="#6772E5" className="hover-fillDark" d="M15 16H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55a2.5 2.5 0 0 1 4.9 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" />
                                        <path fill="#87BBFD" className="hover-fillLight" d="M11 12h2v4h-2v-4z" />
                                    </svg> */}
                                    Blog</h3>
                                </a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </header>
        );
    }
}

export default Header;
