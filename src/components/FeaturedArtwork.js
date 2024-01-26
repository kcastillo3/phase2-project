import React, { useState } from 'react'; 
// - CSS is very important here make sure featured art is rendered properly
/* - !Code may need to be touched up - Unsure if we want 
only the image showing or the full, artist name and description!
   -  onClick and Hover Effect come into play in the CSS here - 
   for the user to interact with the three dots underneath the featured images 
   (which we will have three of)  */

const FeaturedArtwork = () => {
    const [activeArtworkIndex, setActiveArtworkIndex] = useState(0);
    const featuredArtworks = [
{
    title: "The Great Wave off Kanagawa",
    artist: "Hokusai",
    image: "/hokusais-wave.jpeg",
    description: "A beautiful traditional Japanese woodblock print."
},
{
    title: "Apollo and the Continents",
    artist: "Jacques-Louis David",
    image: "/a9.jpg",
    description: "A neoclassical depiction of Apollo, god of the arts, with the personifications of the continents."
},
{
    title: "Girl with Balloon",
    artist: "Banksy",
    image: "/a10.jpg",
    description: "A well-known street art piece by Banksy, depicting a young girl reaching out toward a red, heart-shaped balloon."
}

];

const handleDotClick = (index) => {
setActiveArtworkIndex(index);
};

return (
<section className="featured-artwork">
    <div className="artwork-display">
    <img src={featuredArtworks[activeArtworkIndex].image} alt={featuredArtworks[activeArtworkIndex].title} />
    <h2>{featuredArtworks[activeArtworkIndex].title}</h2>
    <p>{featuredArtworks[activeArtworkIndex].artist}</p>
    <p>{featuredArtworks[activeArtworkIndex].description}</p>
    </div>
    <div className="navigation-dots">
    {featuredArtworks.map((_, index) => (
        <span
        key={index}
        className={`dot ${index === activeArtworkIndex ? 'active' : ''}`}
        onClick={() => handleDotClick(index)}
        />
    ))}
    </div>
</section>
);
};

export default FeaturedArtwork;
