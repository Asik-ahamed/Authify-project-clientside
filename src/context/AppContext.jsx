import { createContext, useEffect, useState } from "react";
import { AppConstants } from "../util/constants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true;

    const backendURL = AppConstants.BACKEND_URL;
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[userData, setUserData] = useState(false);

    const getUserData = async () => {
        try{
          const response = await axios.get(backendURL+"/profile");
          if(response.status === 200) {
            setUserData(response.data);
          } else{
            toast.error("Unable to reterive the profile");
          }
        } catch(error){
            toast.error(error.message);
        }
    }

    const getAuthState = async() => {
      try{
      const response = await axios.get(backendURL+"/is-authenticated");
      if(response.status === 200 && response.data === true){
             setIsLoggedIn(true);
             await getUserData();
      } else {
        setIsLoggedIn(false);
      }
      } catch (error) {
         console.error(error);
      }
    }

    useEffect(() => {
      getAuthState();
    },[])

    

    const currencySymbol = '$'

    const contextValue = {
       backendURL,
       isLoggedIn, setIsLoggedIn,
       userData, setUserData,
       getUserData,
       doctors,
       currencySymbol,
    }

    

    return(
        <AppContext.Provider value={contextValue}>
           {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;

