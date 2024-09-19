// LoadingImage.js
import React from "react";
import '../styles/loading.css'; // Import the CSS file

export function LoadingImage() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
}
