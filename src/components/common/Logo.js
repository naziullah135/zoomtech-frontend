import Image from 'next/image';
import React from 'react';
import logo from "./../../assets/images/Logo/logo.svg";
const Logo = () => {
    return (
        <Image src={logo} alt="logo" />
    );
};

export default Logo;