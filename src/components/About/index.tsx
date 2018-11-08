import  * as React from 'react';


class About extends React.Component  {

  
    public render(): JSX.Element {
        return (
            <div className="jumbotron">
                <h1 className="display-3">About Us</h1>
                <p className="lead">
                    Seersol
                </p>
                <hr className="my-4" />
                <p>
                    Full Stack Developer
                </p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" href="http://seersol.com" role="button">Learn more</a>
                </p>
             </div>
         );
    }
}
export default About;
