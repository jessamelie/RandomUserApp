import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import "../style/Cards.css";

// Define a functional component that takes a 'user' object as a prop.
const Cards = ({ user }) => {
  return (
    <div className="userCard">
      {/* Create a Material-UI Card component*/}
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={user.picture.large}
          alt="user profile picture"
          className="userPicture"
        />

        <CardContent style={{ backgroundColor: "white" }}>
          <Typography gutterBottom variant="h5" component="div">
            <h5>{user.name.first}</h5>
            <h6>{user.name.last}</h6>
          </Typography>
          <Typography color="text.secondary">
            <h4>{user.dob.age}</h4>
          </Typography>
          <h5>{user.location.country}</h5>

          {/* Create a button to initiate an email to the user's email address. */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => (window.location.href = `mailto:${user.email}`)}
          >
            Let's talk
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
