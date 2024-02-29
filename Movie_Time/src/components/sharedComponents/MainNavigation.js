import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const MainNavigation = ({ entireSearchData }) => {
  return (
    <div className={classes.navigation}>

      <NavLink className={classes.navLink} to={"/home"} end>
        {" "}
        <img src="/MOVIETIME_BANNER.jpg" />{" "}
      </NavLink>
      <div className={classes.homeNav}>
        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/home"}
            end
          >
            HOME{" "}
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/coming-soon"}
            end
          >
            COMING SOON{" "}
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/movies-in-theatre"}
            end
          >
            IN THEATRE
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/top-indian-movies"}
            end
          >
            TOP RATED INDIA
          </NavLink>
        </p>

        <p>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.activeColor : classes.notActiveColor
            }
            to={"/top-rated"}
            end
          >
            TOP RATED
          </NavLink>
        </p>
      </div>
      <div>
        <Search entireSearchData={entireSearchData} />
      </div>
      <div className={classes.favouriteNav}>
        <NavLink className={classes.favouriteNavLink} to={"/favorites"}>
          {" "}
          <img className={classes.favimg} src="/Fav.png" />
          <p>MY FAVOURITES</p>
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
