import { useContext } from "react";
import { authContext } from "../context/AuthProvider/AuthProvider";

const Header = () => {
    const { user, logout } = useContext(authContext);
  return (
    <header>
        
          <h3>Welcome, {user} </h3>
          <button onClick={logout}>Logout</button>
          
    </header>
  );
};
export default Header;