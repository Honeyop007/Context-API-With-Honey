import React, { useState } from "react";
import User_context from "./usercontext";

const User_context_provider = ({children})=>{
const [user , setuser] = useState(null)
return(
    <User_context.Provider value={{user, setuser}}>
        {children}
    </User_context.Provider>
)

}

export default User_context_provider