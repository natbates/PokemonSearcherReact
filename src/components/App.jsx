import React from "react";
import '../styles/styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FavouritesPage from "./FavouritesPage";
import FrontPage from "./FrontPage";
import { FavoritePokemonsProvider } from "./FavouritePokemonContext";

function App() {
    return (
        <FavoritePokemonsProvider>
            <Router>
                <Routes>
                    {/* Define the default route (home page) */}
                    <Route path="/" element={<FrontPage />} />
                    
                    {/* Define other routes */}
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Routes>
            </Router>
        </FavoritePokemonsProvider>
    );
}

export default App;
