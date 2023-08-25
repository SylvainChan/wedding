import React from 'react';

const CoupleInfo = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                <img
                    alt="Groom Avatar"
                    className="w-52 h-52 rounded-full mb-2 bg-red-300"
                />
                <h2 className="text-xl font-semibold">Sylvain Chan</h2>
                <p className="text-gray-500">12312321312</p>
            </div>
            <div className="mx-10"/>

            <div className="flex flex-col items-center">
                <img
                    alt="Bride Avatar"
                    className="w-52 h-52 rounded-full mb-2 bg-red-300"
                />
                <h2 className="text-xl font-semibold">Janice Au</h2>
                <p className="text-gray-500">21321321312321</p>
            </div>
        </div>
    );
};

export default CoupleInfo;