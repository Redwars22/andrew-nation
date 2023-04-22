import React from "react";

export const ThemeContext = React.createContext<"light" | "dark">("light");

export function ThemeContextProvider({children}:{children: React.ReactNode}){
    return (
        <ThemeContext.Provider value={"light"}>
            {children}
        </ThemeContext.Provider>
    )
}