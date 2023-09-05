import React from "react";
import { Card, CardMedia } from "@mui/material";
import '../style/Cards.css'

const Cards = ({ user }) => {
  return (
    <div className="cardsContainer">
      <div className="userCard">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="250"
            image={user.picture.large}
            alt="user profile picture"
          />
          <h1>{user.name.first}</h1>
          <h1>{user.name.last}</h1>
          <h2>{user.location.country}</h2>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
