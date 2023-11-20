import { createContext, useState } from "react";

const LoginContexto = createContext();



export function Login({children})
{
    const [login , setLogin] = useState(false)

    const values = {
        login,
        setLogin
    }

    return(
        <LoginContexto.Provider value={values}>
            {children}
        </LoginContexto.Provider>
    )
}

export {LoginContexto}