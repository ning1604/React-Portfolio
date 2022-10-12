import React, { useState } from 'react';
import Navigation from './Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    // to toggle hamburger menu
    const [hiddenMenu, setHiddenMenu] = useState(true);

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='title'>Ning.</div>
                <a href='#' className='toggle-btn' onClick={() => setHiddenMenu(!hiddenMenu)}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <div className={(hiddenMenu ? 'hidden' : '') + ' menu'}>
                    {/* We are passing the currentPage from state and the function to update it */}
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                    {/* Here we are calling the renderPage method which will return a component  */}
                </div>

            </nav>
            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default Header;