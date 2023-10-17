import { useContext, useState } from "react"
import { AuthContext } from "../../appContext/authContext"
import { useNavigate } from "react-router-dom"
import pageUrls from "../../../utils/pageUrls"
import { userRoles } from "../../../utils/constants"
import jwtDecode from "jwt-decode";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("jwtToken") !== null)
  const navigate = useNavigate()

  const handleLogIn = (data) => {
    const decodedToken = jwtDecode(data.token);
    const roles = decodedToken.roles;

    localStorage.setItem("jwtToken", data.token);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("roles", roles)
    setLoggedIn(true);

    if (localStorage.getItem("roles").includes(userRoles.admin)) 
      navigate(pageUrls.adminAccount)
    else
      navigate(pageUrls.home)
  }

  const handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("roles")
    setLoggedIn(false);

    navigate(pageUrls.home)
  }

  const value = {
    isLoggedIn,
    handleLogIn,
    handleLogOut
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