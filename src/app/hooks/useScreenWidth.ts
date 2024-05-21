import React, { useState, useEffect } from 'react';

export const useScreenWidth = (width : number) => {
    const [ isSmallScreen, setIsSmallScreen ] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth < width;
        }
        return false;
    });

    useEffect(() => {
        function checkScreenSize() {
            setIsSmallScreen(window.innerWidth < width);
        }
        if (typeof window !== "undefined") {
            window.addEventListener('resize', checkScreenSize);
            return () => window.removeEventListener('resize', checkScreenSize);
        }
    }, [ width ]);

    return isSmallScreen;
};
// import React, { useState, useEffect } from 'react';
//
// export const useScreenWidth = (width : number) => {
//     const [ isSmallScreen, setIsSmallScreen ] = useState(window.innerWidth < width);
//
//     useEffect(() => {
//         const checkScreenSize = () => {
//             setIsSmallScreen(window.innerWidth < width);
//         };
//
//         window.addEventListener('resize', checkScreenSize);
//
//         return () => window.removeEventListener('resize', checkScreenSize);
//     }, [ width ]);
//
//     return isSmallScreen;
// };
