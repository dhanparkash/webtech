import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-11 py-1">
      <div><Image src='/logotech.jpg' width={200} height={70} alt="logo"/></div>
      <div>
        <nav>
            <ul className="flex items-center gap-10">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Clogs</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
