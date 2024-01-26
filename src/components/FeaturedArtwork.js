import React, { useState } from 'react'; 

const FeaturedArtwork = () => {
const [activeArtworkIndex, setActiveArtworkIndex] = useState(0);
const featuredArtworks = [
{
    title: "The Great Wave off Kanagawa",
    artist: "Hokusai",
    image: "/images/great wave.jpeg", // Updated to include /images/ directory
    description: "A beautiful traditional Japanese woodblock print."
},
{
    title: "Untitled (Rosehips)",
    artist: "Wayne Thiebaud",
    image: "/images/rosehips.jpeg", // Updated to include /images/ directory
    description: "This still life painting depicts a cluster of rosehips, their textured surfaces rendered in meticulous detail with Thiebaud's signature thick, creamy paint application."
},
{
    title: "Girl with Balloon",
    artist: "Banksy",
    image: "/images/a10.jpg", // Updated to include /images/ directory
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

