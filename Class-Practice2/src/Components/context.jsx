import React from 'react';

function User(){
    return(
        <UserContext.Consumer>
            {value=><h1>{value}</h1>}
        </UserContext.Consumer>
    )
}

export const UserContext=React.createContext();

export default function ContextExample(){
    return(
        <UserContext.Provider value="Reed">
            <User/>
        </UserContext.Provider>
    )
}