import React from "react";
import { Header } from "./Header";
import { Pokedex } from "./Pokedex";
import { Favourites } from "./FavouritesPokedex";

function FavouritesPage()
{
    return (
        <div>
            <Header />
            <h2>Favourites</h2>
            <Favourites />
        </div>
    );
}

export default FavouritesPage;