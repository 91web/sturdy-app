import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Hero1 from "../../../assets/img/home-hero1.png";

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
        height: { xs: "190vh", sm: "140vh", md: "100vh" },
        overflow: "hidden",
      }}
    >
      <Box
        py={8}
        sx={{
          height: "100%", // Ensure the inner container takes full height
          display: "flex",
          alignItems: "center", // Center content vertically
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }} // Ensure the grid takes full height
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                my={3}
                sx={{
                  maxHeight: "100%", // Ensure content does not exceed container height
                  overflow: "hidden", // Prevent content from overflowing
                }}
              >
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
                      height: "48px",
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
                      height: "48px",
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
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 8, md: 4 }}>
              <Box>
                <Box position="relative">
                  {/* Background Image */}
                  <Box
                    my={3}
                    component="img"
                    src={Hero1.src}
                    alt="Course Hero"
                    sx={{
                      width: "100%",
                      minHeight: { xs: "400px", sm: "300px", md: "auto" },
                      objectFit: "contained",
                      borderRadius: 2,
                      pl: { xs: 5, md: 0 },
                    }}
                  />

                  {/* closer to buttom with mContent
                  
                  
    
                  
                  
                  */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    mb={-20}
                  >
                    <TypoBox />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeText;
