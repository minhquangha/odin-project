import HomePage from './component/HomePage';
import Layout from './component/Layout';
import User from './component/User';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children:  [
            {index: true , element: <HomePage /> },
            {path: 'user',element: <User />},

        ]
    },
];
export default routes;
