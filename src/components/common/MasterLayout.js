import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import ScrollTop from './ScrollToTop';

const MasterLayout = ({ children }) => {
    console.log("master...");
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <ScrollTop />
        </>
    );
};

export default MasterLayout;