import  * as React from 'react';
import Helmet from "react-helmet";
import HeroBanner from './HeroBanner';

class Home extends React.Component {
     public render(): JSX.Element {
        return (
            <div>
                <Helmet>
                    <title>React TypeScript Starter: HOME</title>
                    <meta name="description" content="React TypeScript Starter: HOME" />
                    <meta name="robots" content="all" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                    <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/labelbox/website/images/hero.png" />
                    <meta property="og:title" content="React TypeScript Starter: HOME" />
                    <meta property="og:description" content="React TypeScript Starter: HOME" />
                </Helmet>
                <HeroBanner />
            </div>
        );
    }
}

export default Home;
