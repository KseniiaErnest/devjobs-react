import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const { state, dispatch } = useContext(Context);
  return (
    <header>
      <nav>
        <p>devjobs</p>
        <div className="nav--pages">
          <Link className="nav--link" to="/">
            home
          </Link>
          <Link to="/">
          <FontAwesomeIcon className="nav-icon" icon={faHouse} style={{ color: "#ffffff" }} />
          </Link>
          <Link className="nav--link" to="/jobboard">
            jobboard
          </Link>
          <Link to="/jobboard">
          <FontAwesomeIcon className="nav-icon" icon={faLaptopCode} style={{ color: "#ffffff" }} />
          </Link>
          <Link  className="nav--link" to="/myfavorite">
            favorite
          </Link>
          <Link to="/myfavorite">
          <FontAwesomeIcon className="nav-icon" icon={faHeart} style={{ color: "#ffffff" }} />
          </Link>
        </div>

        <div className="theme-slider--container">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(3, 3)">
              <path
                d="M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <label className="theme--slider">
            <input
              checked={state.darkMode}
              onChange={() => dispatch({ type: "TOGGLE_MODE" })}
              type="checkbox"
            />
            <span className="fill"></span>
          </label>

          <svg
            width="24"
            height="24"
            viewBox="0 0 22 22"
            style={{ display: "block", margin: "auto" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(6, 6)">
              <path
                d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </g>
          </svg>
        </div>
      </nav>
    </header>
  );
}
