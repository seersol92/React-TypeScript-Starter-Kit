import * as React from 'react';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';

const Layout = (props:any) => {
    return (
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    );
}

export default Layout;