import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "myFavorite";
export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);
    return(
        <FavoritesContext.Provider
        value={{favorite, setFavorite}}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
export function useFavoritesContext (){
    const {favorite, setFavorite} = useContext(FavoritesContext);
    
    function addFavorite (newFavorite){
        // Verify if the id just exist in the favorite items. If just exist reject iff not add in the new list.
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);
        // create a new  list to receives the previous list
        let newList = [...favorite]
        if(!repeatedFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // way to remove out a repeated item in the list to unfavorite it.
        newList = favorite.filter((favorite) => favorite.id !== newFavorite.id)
        return setFavorite(newList)   
    }

    return {
        favorite,
        addFavorite
    }

}