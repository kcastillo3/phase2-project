import React from 'react';
import FeaturedArtwork from './FeaturedArtwork'; 
//Handle CSS to have proper structure for the Header and Paragraph

function HomePage() {
return (
<div className="home-page">
    <section className="welcome-section">
    <h1>Muse</h1>
    <p>
        Muse is intended to be a gallery for artists all over the world to showcase their artwork
        and to likewise view and interact with other pieces. It is an amalgamation of art from
        varying mediums, which anyone is allowed to partake in, and leave their mark in this open
        forum and public museum.
    </p>
    </section>
    <FeaturedArtwork /> 
</div>
);
}

export default HomePage;
