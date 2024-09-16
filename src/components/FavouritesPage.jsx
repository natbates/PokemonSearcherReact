import React from "react";
import { Header } from "./Header";
import { Pokedex } from "./Pokedex";

function FavouritesPage()
{
    return (
        <div>
            <Header />
            <h2>Favourites</h2>
            <Pokedex favourites = {true}></Pokedex>
        </div>
    );
}

export default FavouritesPage;