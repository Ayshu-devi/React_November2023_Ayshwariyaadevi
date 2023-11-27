import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">TREAT YOURSELF WITH OUR DELICIOUS RECIPIES</Typography>
        <p>
        Welcome to our restaurant, where the rich flavors of India come to life in every dish. Our culinary journey is rooted in the vibrant tapestry of Indian cuisine, blending traditional recipes with a modern twist.

Here, we take pride in sourcing the finest ingredients to create authentic dishes that tantalize your taste buds. From the aromatic spices of North India to the coastal flavors of the South, each plate is a celebration of India's diverse culinary heritage.</p>

<p>Immerse yourself in the warm and inviting ambiance of our restaurant, where every detail reflects the spirit of Indian hospitality. Whether you're seeking the comfort of familiar classics or eager to explore bold, new flavors, our menu caters to every palate.

We believe in more than just serving delicious food; we aim to create memorable experiences. Our team is dedicated to providing impeccable service, ensuring your time with us is not just a meal but a culinary journey through India.

Come join us at our restaurant and savor the essence of India on a plate. Discover the magic of Indian cuisine, where every bite tells a story, and every meal is a celebration.</p>

      
        <br />
        <p>
          
        </p>
      </Box>
    </Layout>
  );
};

export default About;