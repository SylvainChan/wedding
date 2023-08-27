import React from 'react';

const Header = () => {
    return (
        <header className="relative">
            <div className="h-64 bg-fixed bg-cover bg-center"
                 style={{backgroundImage: 'url("/img/banner_image.jpeg")'}}>
                <h1 className="text-white text-4xl font-serif tracking-wide absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    The day of
                </h1>
            </div>
        </header>
    );
};

export default Header;