import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/icons/home.png";
import crown from "../assets/icons/crown.png";
import chat from "../assets/icons/chat.png";
import store from "../assets/icons/store.png";

const NavBar = () => {
    return (
        <nav className="h-screen w-[182px] flex-shrink-0 text-black flex flex-col justify-between items-center border-r border-r-[#C9C9C9]">
            <div className="flex flex-col items-center w-full">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full mt-[48px] mb-[64px] w-full object-contain"
                />
                <ul className="flex flex-col w-full pl-[24px]">
                    <li className="flex items-center h-[60px] text-[24px] font-semibold cursor-pointer">
                        <img src={home} alt="home" className="mr-[10px]" />
                        홈
                    </li>
                    <li className="flex items-center h-[60px] text-[24px] font-semibold cursor-pointer">
                        <img src={crown} alt="crown" className="mr-[10px]" />
                        인기
                    </li>
                    <li className="flex items-center h-[60px] text-[24px] font-semibold cursor-pointer">
                        <img src={chat} alt="chat" className="mr-[10px]" />
                        응원
                    </li>
                </ul>
            </div>

            <div className="flex mb-[48px] items-center">
                <img src={store} alt="store" className="mr-[10px] w-[28px] h-[28px]" />
                <p className="text-[24px] font-semibold">가게 관리</p>
            </div>

        </nav>
    );
};

export default NavBar;
