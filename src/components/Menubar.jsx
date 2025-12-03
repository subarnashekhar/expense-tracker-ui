import { useState, useRef, useEffect, useContext } from "react";
import {User, LogOut, X, Menu} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {assets} from "../assets/assets.js";
import {AppContext} from "../context/AppContext.jsx";


const Menubar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { clearUser, user } = useContext(AppContext);
    const navigate = useNavigate();

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        // Add event listener when dropdown is open
        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        setShowDropdown(false);
        navigate("/login");
    };

    return (
        <div className="flex items-center justify-between gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-4 sm:px-7 sticky top-0 z-30">
            {/* Left side - Menu button and title */}
            <div className="flex items-center gap-5">
                <button
                    className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors"
                    onClick={() => {
                        setOpenSideMenu(!openSideMenu);
                    }}
                >
                    {openSideMenu ? (
                        <X className="text-2xl" />
                    ) : (
                        <Menu className="text-2xl" />
                    )}
                </button>

                <div className="flex items-center gap-2">
                    <img src={assets.logo} alt="logo" className="h-10 w-10" />
                    <span className="text-lg font-medium text-black truncate">Expense Tracker</span>
                </div>
            </div>

            {/* Right side - User menu */}
            <div className="relative" ref={dropdownRef}>
            <div>{user.fullName}</div>
            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700
                                 hover:bg-gray-50 transition-colors duration-150"
                            >
                                <LogOut className="w-4 h-4 text-gray-500" />
                                <span>Logout</span>
                            </button>

            </div>
        </div>
    );
};

export default Menubar;
