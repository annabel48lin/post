/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import logo from './logo.png';


import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const plants = ["Agalteca", "Alauca", "Atima", "Cuatro Comunidades", "Otoro", "Marcala", "Moroceli", "Matias", "San Nicolas", "Tamara", "Las Vegas", "San Juan Guarita", "Zamorano", "Gracias"]


  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-10 h-10" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <img src={logo} alt="logo" width='75'/>
          <span className="mx-2 text-2xl font-semibold text-black">
            AguaClara <br/>POST
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "All Plants",
              itemId: "/plants",
              elemBefore: () => <Icon name="user" />,
              subNav: plants.map(item => {
                return {
                  title: item,
                  itemId: '/plants/' + item
                }
              })
            },
            {
              title: "About POST",
              itemId: "/about",
              // elemBefore: () => <Icon name="book" />
            },
            {
              title: "Subscribe",
              itemId: "/subscribe",
              // elemBefore: () => <Icon name="bell" />
            }
          ]}
        />

      </div>
    </React.Fragment>
  );
};
