import HomePage from './component/HomePage';
import Layout from './component/Layout';
import User from './component/User';
import CheckProduct from './component/CheckProduct';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children:  [
            {index: true , element: <HomePage /> },
            {path: 'user',element: <User />},
            {path: 'currentproduct',element: <CheckProduct />},
        ]
    },
];
export default routes;
