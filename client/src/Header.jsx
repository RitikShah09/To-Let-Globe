import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import to_let_globe_logo from './assets/to_let_globe_logo.png'

function Header() {
  
  const [activeLink, setActiveLink ] = useState(6);

  const navLinks = ["Home", "Services", "Blog", "Contact", "About", "Property Listing", "Login"];

  function handleLink(link, index){
    if (index != 6)
    {
      return `/${link.toLowerCase().replaceAll(" ", "")}`
    }
    else
    {
      return "/"  
    }
      
  }

  const [isSidebarOpen, setSidebar] = useState(false);

  const sidebarShow = "side_bar_animation";

  const [linkClicked, setLinkClicked] = useState(true);


  const sidebarHidden = linkClicked ? `side_bar_animation_2 hidden` : "right-[-100%] hidden";

  
  

  return (
    <>
      <header className="absolute top-0 left-0">
        <div className="relative w-screen h-20 pl-2">
          <div className="absolute top-[20%] left-2 flex items-center">
            <img src={to_let_globe_logo} alt="To-Let Logo" className="h-12" />
          </div>

          <div onClick={() => { setSidebar(!isSidebarOpen); setLinkClicked(!linkClicked) }} className="absolute top-[30%] right-[2%] fa-solid fa-bars text-blue-200 text-2xl md:hidden"></div>

          <div className={`border-2 border-amber-500 absolute top-[-2%]  z-10 min-h-fit w-[50%] bg-gray-900 list-none px-4 pt-4 pb-10 md:hidden ${isSidebarOpen ? sidebarShow : sidebarHidden  } `}>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className="mb-4">
                  <Link
                    to={handleLink(link, index)}
                    onClick={() => {
                      setActivateLink(index);
                      setSidebar(!isSidebarOpen);
                      setLinkClicked(!linkClicked)
                    }}
                    className="text-white"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </div>

          <nav className="hidden absolute top-[30%] right-2 md:max-lg:w-[70%] md:block md:w-[50%]">
            <ul className="w-[100%] text-gray-500 flex justify-around text-sm xl:text-lg 3xl:text-xl 4xl:text-2xl">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={handleLink(link, index)}
                      onClick={() => {
                        setActiveLink(index);
                      }}
                      className={`px-2 py-1 rounded-lg hover:bg-teal-500 hover:text-green-900 ${
                        activeLink === index ? "bg-yellow-500 text-blue-900" : ""
                      } `}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
