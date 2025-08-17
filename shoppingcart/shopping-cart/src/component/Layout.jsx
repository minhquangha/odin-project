import { Outlet } from 'react-router-dom';
import Header from './Header';
import  Footer  from './Footer';
import { useState } from 'react';
export default function Layout() {
    const [count,setCount] = useState(0);
    return (
        <div className='layout'>
            <Header />
            <div className='content'>
                <Outlet context={[count,setCount]} />
            </div>
            <Footer />
        </div>
    );
}
