import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CIcon from "../../../../../assets/img/circle-icon.png";
import Image from "next/image";
const ContentsDetails = () => {
  return (
    <Box pt={2}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            <Box py={2}>
              <Box p={0} border={1} borderColor="#e0e0e0" borderRadius={2}>
                <Box pl={2}>
                  <Typography
                    color="#404040"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 30, md: 36 }}
                    pt={2}
                  >
                    What you&apos;ll learn
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box py={2}>
              <Box p={2} border={1} borderColor="#e0e0e0" borderRadius={2}>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 30, md: 36 }}
                  // p={2}
                >
                  Course Content
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box py={2}>
              <Box p={0} border={1} borderColor="#e0e0e0" borderRadius={2}>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 30, md: 36 }}
                  p={1}
                >
                  Skills you will Gain
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="• Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          secondary="• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box py={2}>
              <Box p={2}>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 30, md: 36 }}
                >
                  Requirements
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box py={2}>
              <Box>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 30, md: 36 }}
                >
                  Description
                </Typography>
                <Typography mb={2}>
                  You&apos;re here because you want to create your own WordPress
                  websites, right?
                </Typography>
                <Typography mb={2}>
                  This WordPress for Beginners course is the perfect place to
                  start. This complete WordPress course is designed for
                  beginners like you who have never built a WordPress website
                  (or any website for that matter).
                </Typography>
                <Typography mb={2}>
                  WordPress is the perfect tool for creating a fully customized
                  website for any purpose. Whether you want to create a blog, a
                  personal portfolio, or a business website to sell your
                  products and services, you can do it with WordPress.
                </Typography>
                <Typography mb={2}>
                  While WordPress might seem scary from the outside, once you
                  get started, it's fairly intuitive. Everything from hosting to
                  installing a theme, then actually building your first pages
                  can be learned in the first few lessons of this course.
                </Typography>
                <Typography mb={2}>
                  With this WordPress course, you don't need to actually pay for
                  hosting to practice with WordPress. I'll show you how to
                  create a free temporary site so you can follow along.
                </Typography>
                <Typography fontWeight={600} mb={1}>
                  Why learn WordPress from me?
                </Typography>
                <Typography mb={2}>
                  I've been building WordPress websites for years. Just like
                  you, there was a time when I was a complete newbie! I was
                  honestly scared of starting a WordPress website because it
                  seemed so daunting.
                </Typography>
                <Typography fontWeight={600} mb={1}>
                  Now I love WordPress!
                </Typography>
                <Typography>
                  I wouldn't recommend using any other web-building tool. I
                  still remember what it is like to be a beginner, and I've kept
                  that in mind while creating this entire course. I walk you
                  through every process step-by-step to make sure you understand
                  things clearly. And if there is ever anything that is
                  confusing, just let me know and I'll create more lessons that
                  explain or walk you through myself.
                </Typography>
              </Box>
            </Box>
            <Box py={2}>
              <Box p={2}>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 30, md: 36 }}
                >
                  Who’s this course for?
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis." />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box py={2}>
              <Box p={2}>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 30, md: 36 }}
                  //   p={2}
                >
                  Instructors
                </Typography>
                <Typography
                  color="#084E06"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 18, md: 20 }}
                  //   p={2}
                  // mb={2}
                >
                  Dr Phil Kennedy
                </Typography>

                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box ml={2} mb={3}>
                    <Image
                      src={CIcon.src}
                      alt="Circle"
                      width={108}
                      height={108}
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    ml={2}
                    mb={3}
                  >
                    <Typography mb={1}>4.6 star rating</Typography>
                    <Typography mb={1}>512 reviews</Typography>
                    <Typography mb={1}>2,980 students</Typography>
                    <Typography mb={1}>12 courses</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography mb={2}>
                    You&apos;re here because you want to create your own
                    WordPress websites, right?
                  </Typography>
                  <Typography mb={2}>
                    This WordPress for Beginners course is the perfect place to
                    start. This complete WordPress course is designed for
                    beginners like you who have never built a WordPress website
                    (or any website for that matter).
                  </Typography>
                  <Typography mb={2}>
                    WordPress is the perfect tool for creating a fully
                    customized website for any purpose. Whether you want to
                    create a blog, a personal portfolio, or a business website
                    to sell your products and services, you can do it with
                    WordPress.
                  </Typography>
                  <Typography mb={2}>
                    While WordPress might seem scary from the outside, once you
                    get started, it&apos;s fairly intuitive. Everything from
                    hosting to installing a theme, then actually building your
                    first pages can be learned in the first few lessons of this
                    course.
                  </Typography>
                  <Typography mb={2}>
                    With this WordPress course, you don&apos;t need to actually
                    pay for hosting to practice with WordPress. I&apos;ll show
                    you how to create a free temporary site so you can follow
                    along.
                  </Typography>
                  <Typography fontWeight={600} mb={1}>
                    Why learn WordPress from me?
                  </Typography>
                  <Typography mb={2}>
                    I&apos;ve been building WordPress websites for years. Just
                    like you, there was a time when I was a complete newbie! I
                    was honestly scared of starting a WordPress website because
                    it seemed so daunting.
                  </Typography>
                  <Typography fontWeight={600} mb={1}>
                    Now I love WordPress!
                  </Typography>
                  <Typography>
                    I wouldn&apos;t recommend using any other web-building tool.
                    I still remember what it is like to be a beginner, and
                    I&apos;ve kept that in mind while creating this entire
                    course. I walk you through every process step-by-step to
                    make sure you understand things clearly. And if there is
                    ever anything that is confusing, just let me know and
                    I&apos;ll create more lessons that explain or walk you
                    through myself.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Box py={2}>
              <Box p={2} border={1} borderColor="#e0e0e0" borderRadius={2}>
                <Box>
                  <Typography
                    color="#404040"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 30, md: 40 }}
                    pt={2}
                  >
                    N24,000
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "#084E06",
                      color: "#fff",
                      textTransform: "none",
                      fontFamily: "sf pro display",
                      fontSize: 18,
                      height: "30px",
                      width: 500,
                      "&:hover": {
                        backgroundColor: "#0B4A0B",
                        color: "#fff",
                      },
                    }}
                  >
                    Enrol now
                  </Button>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  ml={2}
                  mb={3}
                >
                  <Typography mb={1}>This course is for</Typography>
                  <Typography mb={1}>7.5 hours on valuable videos</Typography>
                  <Typography mb={1}>13 articles</Typography>
                  <Typography mb={1}> 3 swipe files</Typography>
                  <Typography mb={1}>Access on mobile and Desktop</Typography>
                  <Typography mb={1}> Full time access</Typography>
                  <Typography mb={1}>Certificate of completion</Typography>
                </Box>
                <Typography
                  color="#084E06"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 18, md: 20 }}
                  //   p={2}
                  // mb={2}
                >
                  Dr Phil Kennedy
                </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <Box ml={2} mb={3}>
                    <Image
                      src={CIcon.src}
                      alt="Circle"
                      width={108}
                      height={108}
                    />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    ml={2}
                    mb={3}
                  >
                    <Typography mb={1}>4.6 star rating</Typography>
                    <Typography mb={1}>512 reviews</Typography>
                    <Typography mb={1}>2,980 students</Typography>
                    <Typography mb={1}>12 courses</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentsDetails;
