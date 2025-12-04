import React from "react";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div style={styles.card}>
      <img src={posterURL} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>⭐ {rating}/5</p>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "15px",
    margin: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  },
  image: {
    width: "100%",
    borderRadius: "10px"
  }
};

export default MovieCard;
