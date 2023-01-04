import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
function User(){
    const {user,isAuthenticated,isLoading} = useAuth0()
    if(isLoading){
        return <div>Loading...</div>
    }
    return(
        isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name}/>
            <h1>Name of the user is: {user.name}</h1>
            <p>Email of the user is: {user.email}</p>
        </div>)
    )
}
export default User;