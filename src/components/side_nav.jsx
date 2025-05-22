import React from "react";
import logo from "../assets/logo.svg";
import home from "../assets/icons/home.svg";
import crown from "../assets/icons/crown.svg";
import chat from "../assets/icons/chat.svg";
import store from "../assets/icons/store.svg";

const menuList = [
    { key: "home", icon: home, label: "홈" },
    { key: "crown", icon: crown, label: "인기" },
    { key: "chat", icon: chat, label: "응원" },
];

const NavBar = ({ selected, onSelectMenu }) => {
    return (
        <nav className="h-screen w-[182px] flex-shrink-0 text-black flex flex-col justify-between items-center border-r border-r-[#C9C9C9]">
            <div className="flex flex-col items-center w-full">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full mt-[48px] mb-[64px] object-contain"
                />
                <ul className="flex flex-col w-full pl-[24px]">
                    {menuList.map((item) => {
                        const isSelected = selected === item.key;
                        return (
                            <li
                                key={item.key}
                                className={`relative flex items-center h-[60px] text-[24px] font-semibold cursor-pointer transition-colors
                                ${isSelected ? "text-[#FC650D]" : "text-black"}`}
                                onClick={() => onSelectMenu(item.key)}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.key}
                                    className={`mr-[10px] w-[28px] h-[28px] transition-all
                                    ${isSelected ? "svg-orange-filter" : ""}`}
                                />
                                {item.label}
                                {isSelected && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[28px] bg-[#FC650D]"></div>}
                            </li>
                        );
                    })}
                </ul>
            </div>


            <div
                className={`relative flex w-full pl-[24px] mb-[48px] items-center cursor-pointer transition-colors
    ${selected === "manage" ? "text-[#FC650D]" : "text-black"}`}
                onClick={() => onSelectMenu("manage")}
            >
                <img
                    src={store}
                    alt="manage"
                    className={`mr-[10px] w-[28px] h-[28px] transition-all
        ${selected === "manage" ? "svg-orange-filter" : ""}`}
                />
                <p className="text-[24px] font-semibold">가게 관리</p>
                {selected === "manage" && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[28px] bg-[#FC650D]"></div>}
            </div>
        </nav>
    );
};

export default NavBar;
