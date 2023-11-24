import React from "react";
const ConditionalComponent=({isLoggedIn})=>{
    return(
        <div>
            {
                isLoggedIn?(
                    <p>Welcome, User! You are logged in.</p>
                ):
                (
                    <p>Please log in to accesss the content.</p>
                )
            }
        </div>
    );
};
export default ConditionalComponent;