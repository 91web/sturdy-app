import React from "react";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const BannerVision = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#fff",
          color: "#fff",
          pt: 4,
          textAlign: "center",
          height: "400px",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 4,
            }}
          >
            <Typography
              color="#404040"
              fontFamily="'libre baskerville'"
              fontSize={{ xs: 28, md: 36 }}
              mb={1}
            >
              Our Vision
            </Typography>

            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 16, md: 18 }}
              mb={1}
              sx={{ textAlign: "center", width: { xs: "100%", md: "80%" } }}
            >
              Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum
              cursus amet augue tempor etiam quis. morbi rutrum cursus amet
              augue tempor etiam quis.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BannerVision;
