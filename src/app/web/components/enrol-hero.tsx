"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Banner } from "./banner";
import TestimonialSlider from "./testimonial";
import EnrolBanner from "./enrol-banner";
const BannerSection = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#063D05",
          color: "#fff",
          py: 8,
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
              color="#fff"
              fontFamily="'libre baskerville'"
              fontSize={{ xs: 28, md: 36 }}
              mb={1}
            >
              All courses tailored
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              <span> to your unique learning style</span>
            </Typography>

            <Typography
              color="#CCCCCC"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 16, md: 18 }}
              mb={1}
              sx={{ textAlign: "center", width: { xs: "100%", md: "80%" } }}
            >
              Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum
              cursus amet augue tempor etiam quis. morbi rutrum cursus amet
              augue tempor etiam quis.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#CCCCCC",
                color: "#fff",
                textTransform: "none",
                fontFamily: "sf pro display",
                fontSize: 18,
              }}
            >
              Enrol now
            </Button>
          </Box>
        </Container>
      </Box>
      <Box>
        <Banner title={``} description={``} />
      </Box>
      <TestimonialSlider />
      <EnrolBanner />
    </Box>
  );
};
export default BannerSection;
