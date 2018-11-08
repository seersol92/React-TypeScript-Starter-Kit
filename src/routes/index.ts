import About from './../components/About';
import Home from './../components/Home';



const Routes = [
    {
        component: About,
        path: '/about'
    },
    {
        component: Home,
        exact: true,
        path: '/'
    }
];

export default Routes;
