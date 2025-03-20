import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CourseCover from "../../../../../assets/img/course-cover2.png";
import PlayIcon from "../../../../../assets/svg/play-icon.svg";

const CourseEvent = () => {
  return (
    <Box
      sx={{
        bgcolor: "#252525",
        height: { xs: "900px", md: "550px" },
  
      }}
    >
      <Box py={8}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <Box >
                <Box my={2}>
                  <Typography
                    color="#fff"
                    fontFamily="'sf pro display'"
                    fontSize={{ xs: 40, md: 54 }}
                    my={2}
                  >
                    Self Development
                  </Typography>
                  <Typography
                    color="#DBDBDB"
                    fontFamily="'sf pro display'"
                    fontSize={{ xs: 18, md: 20 }}
                    my={2}
                    width={{ xs: "100%", md: "85%" }}
                  >
                    When the world lies on your shoulders as a man, you need the
                    expertise and strength to carry it like a pro, let us show
                    you how in Sturdywings edu.
                  </Typography>
                </Box>
                <Box>
                  <Box display="flex" alignItems="center" sx={{ my: 1 }}>
                    <Typography
                      color="#F6A507"
                      fontFamily="'sf pro display'"
                      fontSize={{ xs: 16, md: 18 }}
                      mr={1}
                    >
                      4.5
                    </Typography>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      color="#DBDBDB"
                      fontFamily="'sf pro display'"
                      fontSize={{ xs: 16, md: 18 }}
                    >
                      (512 ratings)
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="#DBDBDB"
                      fontFamily="'sf pro display'"
                      fontSize={{ xs: 16, md: 18 }}
                      my={2}
                    >
                      Created by James Clear
                    </Typography>
                    <Typography
                      color="#DBDBDB"
                      fontFamily="'sf pro display'"
                      fontSize={{ xs: 16, md: 18 }}
                      sx={{ display: "inline-block", mr: 5 }}
                    >
                      Last Updated: 04/08/2022
                    </Typography>
                    <Typography
                      color="#DBDBDB"
                      fontFamily="'sf pro display'"
                      fontSize={{ xs: 16, md: 18 }}
                      sx={{ display: "inline-block", mr: 5 }}
                    >
                      Language: English
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
              <Box position="relative">
                {/* Background Image */}
                <Box
                  component="img"
                  src={CourseCover.src}
                  alt="Course Hero"
                  sx={{
                    width: "100%",
                    minHeight: { xs: "400px", md: "auto" },
                    objectFit: "cover",
                  }}
                />

                {/* Centered Content */}
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
                >
                  <Box>
                    <Image
                      src={PlayIcon.src}
                      alt="Play Icon"
                      width={60}
                      height={60}
                    />
                  </Box>
                  <Typography
                    color="#F5F5F5"
                    fontFamily="'sf pro display'"
                    fontSize={{ xs: 16, md: 18 }}
                    mt={1}
                  >
                    Watch Course Preview
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CourseEvent;
