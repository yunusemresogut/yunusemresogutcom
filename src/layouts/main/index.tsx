import { Outlet } from 'react-router-dom';
import Header from '~/layouts/header';
import Footer from '../footer';

export default function MainLayout() {
    return (
        <div>
            <Header />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}