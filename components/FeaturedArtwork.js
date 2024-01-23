import React from 'react'; 

const FeaturedArtwork = () => {
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
// Add more artworks if needed
];

return (
<section className="featured-artwork">
    {featuredArtworks.map((artwork, index) => (
    <div key={index} className="artwork-item">
        <h2>{artwork.title}</h2>
        <p>by {artwork.artist}</p>
        <img src={artwork.image} alt={`Artwork by ${artwork.artist}`} />
        <p>{artwork.description}</p>
    </div>
    ))}
</section>
);
}

export default FeaturedArtwork;
