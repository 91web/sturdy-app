import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Hero1 from "../../../assets/img/home-hero1.png";
import Hero2 from "../../../assets/img/home-hero2.png";
import Hero3 from "../../../assets/img/home-cover.png";
import Avatar1 from "../../../assets/img/avatar1.png";
import Avatar2 from "../../../assets/img/avatar2.png";
import Avatar3 from "../../../assets/img/avatar3.png";
import Avatar4 from "../../../assets/img/avatar4.png";
import Avatar5 from "../../../assets/img/avatar5.png";
import TypoBox from "./hero-tag";

const HomeText = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Hero3.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: { xs: "110vh", md: "80vh" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          sx={{ position: "relative", py: 10, px: 0, mx: 0 }}
        >
          <Grid
            container
            spacing={4}
            sx={{
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, Row on desktop
              alignItems: "center",
              justifyContent: "center", // Center the content
            }}
          >
            {/* Left Section (Text & Buttons) */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  fontFamily={"'libre baskerville'"}
                  fontSize={{ xs: 32, md: 54 }}
                  color="#404040"
                  width={{ xs: "60%", md: "80%" }}
                >
                  Start your journey with our courses
                </Typography>
                <Typography
                  fontFamily={"'sf display pro'"}
                  fontSize={{ xs: 16, md: 18 }}
                  color="#4F4F4F"
                  sx={{ width: { xs: "100%", md: "75%" } }}
                >
                  Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi
                  rutrum cursus amet augue tempor etiam quis.
                </Typography>
              </Box>

              {/* Buttons */}
              <Box
                gap={2}
                sx={{
                  display: "flex",
                  mt: 3,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#084E06",
                    textTransform: "none",
                    p: "12px",
                    height: "51px",
                    fontFamily: "'sf display pro'",
                    fontSize: 18,
                    color: "#fff",
                    borderRadius: 2,
                    width: 150,
                    "&:hover": { backgroundColor: "#0B6A0B" },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "transparent",
                    textTransform: "none",
                    p: "12px",
                    height: "51px",
                    fontFamily: "'sf display pro'",
                    fontSize: 18,
                    border: "1px solid #9B9B9B",
                    color: "#2D2D2D",
                    borderRadius: 2,
                    width: 150,
                    "&:hover": {
                      backgroundColor: "#fff",
                      border: "1px solid #2D2D2D",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>

              {/* Avatar Group */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                  mt: 3,
                }}
              >
                <AvatarGroup max={6}>
                  <Avatar alt="Remy Sharp" src={Avatar1.src} />
                  <Avatar alt="Travis Howard" src={Avatar2.src} />
                  <Avatar alt="Agnes Walker" src={Avatar3.src} />
                  <Avatar alt="Trevor Henderson" src={Avatar4.src} />
                  <Avatar alt="Cindy Baker" src={Avatar5.src} />
                  <Avatar alt="Cindy Baker" src={Avatar5.src} />
                  <Avatar alt="Cindy Baker" src={Avatar5.src} />
                  <Avatar alt="Cindy Baker" src={Avatar5.src} />
                  <Avatar alt="Cindy Baker" src={Avatar5.src} />
                  <Avatar
                    sx={{
                      bgcolor: "#EFFEEE",
                      color: "#084E06",
                    }}
                  >
                    +5
                  </Avatar>
                </AvatarGroup>
              </Box>
            </Grid>

            {/* Right Section (Image & Typography) */}
            <Grid
              size={{ xs: 12, md: 5.5 }}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "right",
              }}
            >
              <Box
                sx={{
                  width: { xs: 270, md: "auto" },
                  ml: { xs: "auto", md: 0 },
                  // height: { xs: 600, md: "auto" },
                }}
              >
                <Box display={{ xs: "none", md: "block" }}>
                  <Image
                    src={Hero1.src}
                    alt="home-hero"
                    width={505}
                    height={512}
                    layout="responsive"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
                <Box display={{ xs: "block", md: "none" }}>
                  <Image
                    src={Hero2.src}
                    alt="home-hero"
                    width={505}
                    height={612}
                    layout="responsive"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Box>
              {/* Typography - Step Layout */}
              <Box mt={{ xs: 25, md: 28 }} mr={{ xs: 2, md: 0 }}>
                <TypoBox />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeText;
