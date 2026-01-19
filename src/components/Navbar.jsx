import { Link } from "react-router";
import logo from "../assets/skill-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading } = useContext(AuthContext);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("SignOut successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <Link to='/owner'><img src={logo} className="w-13.75" /></Link>
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          {user && (
            <li>
              <MyLink to={"/profile"}>Profile</MyLink>
            </li>
          )}
        </ul>

        {loading ? (
          <HashLoader color="#e74c3c" />
        ) : user ? (
          <div className="text-center space-y-3">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-10 w-10 rounded-full mx-auto"
                alt=""
              />
            </button>

            <div
              className="dropdown dropdown-end menu w-54 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="font-semibold text-xl">{user?.displayName}</h2>
              <p className="text-xs">{user?.email}</p>
              <button onClick={handleSignout} className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;