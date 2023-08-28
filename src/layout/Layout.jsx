import React from 'react';
import Header from '../shared/Header';
import Routers from '../routes/Routers';
import Footer from '../shared/Footer';
import LastFooter from '../shared/LastFooter';

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
            <LastFooter />
        </div>
    );
};

export default Layout;