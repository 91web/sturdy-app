"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";

import Hero4 from "../../../../assets/img/about-hero2.png";

export default function Operation() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 8 }}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Image - Full width on mobile, appears below content */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component="img"
            src={Hero4.src}
            alt="Support representative"
            sx={{
              width: "100%",
              minHeight: { xs: "300px", sm: "300px", md: "auto" },
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Content - Full width on mobile, appears above image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box textAlign={"left"} mt={2}>
            <Typography
              color="#404040"
              fontFamily={"'libre baskerville'"}
              fontSize={{ xs: 24, md: 32 }}
              mb={1}
            >
              How we operate?
            </Typography>

            {/* First section */}

            <Typography
              color="#404040"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 22, md: 24 }}
              mb={1}
            >
              Provide what topics to choose from
            </Typography>
            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 15, md: 16 }}
              mb={2}
            >
              Choose from our wide range of courses. Get the content you want to
              learn delivered. Forget how the system functions.
            </Typography>

            {/* Second section */}

            <Typography
              color="#404040"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 22, md: 24 }}
              mb={1}
            >
              Enroll in the program
            </Typography>
            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 15, md: 16 }}
              mb={2}
            >
              Choose from our wide range of courses. Get the content you want to
              learn delivered. Forget how the system functions.
            </Typography>

            {/* Third section */}

            <Typography
              color="#404040"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 22, md: 24 }}
              mb={1}
            >
              Check up on your progress
            </Typography>
            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 15, md: 16 }}
              mb={2}
            >
              Choose from our wide range of courses. Get the content you want to
              learn delivered. Forget how the system functions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
