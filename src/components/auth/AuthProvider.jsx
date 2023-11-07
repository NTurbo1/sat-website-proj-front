import { useContext, useState } from "react"
import { AuthContext } from "../appContext/authContext"
import { useLocation, useNavigate } from "react-router-dom"
import pageUrls from "../../utils/pageUrls"
import { userRoles } from "../../utils/constants"
import jwtDecode from "jwt-decode";
import { apiEndpoints } from "../../utils/apiEndpoints"

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("jwtToken") !== null)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogIn = async (username, password) => {

    try {
      const response = await fetch(
        apiEndpoints.authenticate,
        {
          method: "POST", 
          body: JSON.stringify({
            email: username,
            password: password
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        const decodedToken = jwtDecode(data.token);
        const roles = decodedToken.roles;

        localStorage.setItem("jwtToken", data.token);
        localStorage.setItem("firstName", data.firstName);
        localStorage.setItem("lastName", data.lastName);
        localStorage.setItem("roles", roles);
        localStorage.setItem("userId", data.userId);
        setLoggedIn(true);

        let defaultLoginRedirectUrl = pageUrls.home; // for students

        if (localStorage.getItem("roles").includes(userRoles.admin)) 
          defaultLoginRedirectUrl = pageUrls.adminAccount;

        const origin = location.state?.from?.pathname || defaultLoginRedirectUrl;
        navigate(origin);

        return true;

      } else {
        console.error("Failed to authenticate:", response.statusText);
        return false;
      }

    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const handleLogOut = async () => { 

    try {
      const response = await fetch(
        apiEndpoints.logout,
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      );

      if (response.ok) {

        cleanUpLocalStorage();
        setLoggedIn(false);

        navigate(pageUrls.login);

        return true;
        
      } else {
        console.error("Failed to logout:", response.statusText);
        return false;
      }

    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const checkJwtTokenExpiration = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    
    if (jwtToken === null) {
      cleanUpLocalStorage();
      setLoggedIn(false);
      return false;
    }

    try {
      const currentTime = Date.now() / 1000; // Convert to seconds
      const decodedToken = jwtDecode(jwtToken);

      if (decodedToken.exp < currentTime) { // Jwt token is expired
        // cleanUpLocalStorage();
        const response = await handleLogOut();
        setLoggedIn(false);
        return false;
      }

      return true;

    } catch(error) {

      console.error("Invalid token specified:", error);
      cleanUpLocalStorage();
      handleLogOut();

      return false;
    }
  };

  const checkAdminAuthorization = () => {
    // called after checkJwtTokenExpiration => jwtToken is valid 
    // and exists in localStorage
    const jwtToken = localStorage.getItem("jwtToken");
    const decodedToken = jwtDecode(jwtToken);

    if (decodedToken.roles.includes(userRoles.admin)) {
      return true;
    }

    return false;
  }

  const checkStudentAuthorization = () => {
    // called after checkJwtTokenExpiration => jwtToken is valid 
    // and exists in localStorage
    const jwtToken = localStorage.getItem("jwtToken");
    const decodedToken = jwtDecode(jwtToken);

    if (decodedToken.roles.includes(userRoles.student)) {
      return true;
    }

    return false;
  }

  const cleanUpLocalStorage = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("roles");
    localStorage.removeItem("userId");
  }

  const value = {
    isLoggedIn,
    handleLogIn,
    handleLogOut,
    checkJwtTokenExpiration,
    checkAdminAuthorization,
    checkStudentAuthorization
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}