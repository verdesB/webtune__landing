"use client"
import React, { useState } from 'react';
import { Button } from './ui/Button';
import logo from '/public/logo.png';
import './styles/Header.scss';
import Image from "next/image";

import { useScreenWidth } from '../hooks/useScreenWidth';

const Header = () => {
    const [ navState, setNavState ] = useState(false);
    const [ className, setClassName ] = useState('closed');
    const isMobile = useScreenWidth(860);

    const handleClick = () => {
        if (navState === false) {
            setNavState(true);
            setClassName('open');
        } else {
            setNavState(false);
            setClassName('closed');
        }
    };

    return (
        <header className="header">
            <div className="header__boxLeft">
                <Image className="header__img" src={logo} alt={""} />
            </div>
            {isMobile ? (
                <>
                    <nav className={`header__${className} bg-grid-black/[0.2] bg-[rgb(191,191,191)]`}>
                        <ul className="header__listOpen">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/">Fonctionnalités</a></li>
                            <li><a href="/">Tarifs</a></li>
                            <li><a href="/">More</a></li>
                        </ul>
                    </nav>
                    <div className="header__boxMenu">
                        <Button className="header__button" onClick={handleClick}>Menu</Button>
                    </div>
                </>

            ) : (
                <>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/">Fonctionnalités</a></li>
                            <li><a href="/">Tarifs</a></li>
                            <li><a href="/">More</a></li>
                        </ul>
                    </nav>
                    <div className="header__boxRight">
                        <Button className="header__button">Créer un compte</Button>
                        <Button className="header__button" variant={"outline"}>Se connecter</Button>
                    </div>
                </>
            )}

        </header>
    );
};

export default Header;
