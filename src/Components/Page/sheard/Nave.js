import React from "react";
import { Link } from "react-router-dom";
import { ImDownload2 } from "react-icons/im";

const Nave = () => {
  return (
    <div className="navbar bg-base-300 rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
      </div>
      <div className="navbar-center">
        <div>
          <Link className="flex justify-center items-center" to="/uplodeimg">
            <ImDownload2 />
            <Link className="btn btn-ghost normal-case text-xl">uplode</Link>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/profile' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
             
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Nave;
