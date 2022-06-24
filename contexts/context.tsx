import { createContext, useState, useContext } from "react";

const Context = createContext("");
export const useCtx = () => useContext(Context);
export const Provider = ({ children }:any) => {
  
  const [reproductor, setReproductor] = useState(false);


  return (
    //@ts-ignore
    <Context.Provider value={{reproductor,setReproductor}}>
      {children}
    </Context.Provider>
  );
};