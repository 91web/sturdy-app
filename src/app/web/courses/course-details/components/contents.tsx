import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const ContentsDetails = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
          <Box py={4}>
            <Box p={0} border={1} borderColor="#e0e0e0" borderRadius={2}>
              <Typography
                color="#404040"
                fontFamily={"'sf pro display'"}
                fontSize={{ xs: 30, md: 36 }}
                p={2}
              >
                What you&apos;ll learn
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
          <Box py={4}>
            <Box p={4} border={1} borderColor="#e0e0e0" borderRadius={2}>
              <Typography
                color="#404040"
                fontFamily={"'sf pro display'"}
                fontSize={{ xs: 30, md: 36 }}
                p={2}
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
          <Box py={4}>
            <Box p={0} border={1} borderColor="#e0e0e0" borderRadius={2}>
              <Typography
                color="#404040"
                fontFamily={"'sf pro display'"}
                fontSize={{ xs: 30, md: 36 }}
                p={2}
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
          <Box py={4}>
            <Box p={4}>
              <Typography
                color="#404040"
                fontFamily={"'sf pro display'"}
                fontSize={{ xs: 30, md: 36 }}
                p={2}
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
          <Box py={4}>
            <Box p={4}>
              <Typography
                color="#404040"
                fontFamily={"'sf pro display'"}
                fontSize={{ xs: 30, md: 36 }}
                p={2}
              >
                {" "}
                Description
              </Typography>
              <Typography mb={2}>
                You're here because you want to create your own WordPress
                websites, right?
              </Typography>
              <Typography mb={2}>
                This WordPress for Beginners course is the perfect place to
                start. This complete WordPress course is designed for beginners
                like you who have never built a WordPress website (or any
                website for that matter).
              </Typography>
              <Typography mb={2}>
                WordPress is the perfect tool for creating a fully customized
                website for any purpose. Whether you want to create a blog, a
                personal portfolio, or a business website to sell your products
                and services, you can do it with WordPress.
              </Typography>
              <Typography mb={2}>
                While WordPress might seem scary from the outside, once you get
                started, it's fairly intuitive. Everything from hosting to
                installing a theme, then actually building your first pages can
                be learned in the first few lessons of this course.
              </Typography>
              <Typography mb={2}>
                With this WordPress course, you don't need to actually pay for
                hosting to practice with WordPress. I'll show you how to create
                a free temporary site so you can follow along.
              </Typography>
              <Typography fontWeight={600} mb={1}>
                Why learn WordPress from me?
              </Typography>
              <Typography mb={2}>
                I've been building WordPress websites for years. Just like you,
                there was a time when I was a complete newbie! I was honestly
                scared of starting a WordPress website because it seemed so
                daunting.
              </Typography>
              <Typography fontWeight={600} mb={1}>
                Now I love WordPress!
              </Typography>
              <Typography>
                I wouldn't recommend using any other web-building tool. I still
                remember what it is like to be a beginner, and I've kept that in
                mind while creating this entire course. I walk you through every
                process step-by-step to make sure you understand things clearly.
                And if there is ever anything that is confusing, just let me
                know and I'll create more lessons that explain or walk you
                through myself.
              </Typography>
            </Box>
          </Box>
          <Box py={4}>
            <Box p={4}>
              <Typography
                color="#404040"
                fontFamily={"'sf pro display'"}
                fontSize={{ xs: 30, md: 36 }}
                p={2}
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
              </List>
            </Box>
          </Box>
          <Box py={4}>
            <Box p={4}>
              <Typography
                color="#404040"
                fontFamily={"'sf pro display'"}
                fontSize={{ xs: 30, md: 36 }}
                p={2}
              >
                {" "}
                Instructors
              </Typography>
              <Typography color="#007b5e" fontWeight={600} mb={2}>
                Dr Phil Kennedy
              </Typography>

              {/* Rating Section */}
              <Box display="flex" alignItems="center" mb={3}>
                <Typography mx={1}>4.6 star rating</Typography>
                <Typography mx={1}>| 512 reviews</Typography>
                <Typography mx={1}>| 2,980 students</Typography>
                <Typography mx={1}>| 12 courses</Typography>
              </Box>

              <Typography mb={2}>
                You're here because you want to create your own WordPress
                websites, right?
              </Typography>
              <Typography mb={2}>
                This WordPress for Beginners course is the perfect place to
                start. This complete WordPress course is designed for beginners
                like you who have never built a WordPress website (or any
                website for that matter).
              </Typography>
              <Typography mb={2}>
                WordPress is the perfect tool for creating a fully customized
                website for any purpose. Whether you want to create a blog, a
                personal portfolio, or a business website to sell your products
                and services, you can do it with WordPress.
              </Typography>
              <Typography mb={2}>
                While WordPress might seem scary from the outside, once you get
                started, it's fairly intuitive. Everything from hosting to
                installing a theme, then actually building your first pages can
                be learned in the first few lessons of this course.
              </Typography>
              <Typography mb={2}>
                With this WordPress course, you don't need to actually pay for
                hosting to practice with WordPress. I'll show you how to create
                a free temporary site so you can follow along.
              </Typography>
              <Typography fontWeight={600} mb={1}>
                Why learn WordPress from me?
              </Typography>
              <Typography mb={2}>
                I've been building WordPress websites for years. Just like you,
                there was a time when I was a complete newbie! I was honestly
                scared of starting a WordPress website because it seemed so
                daunting.
              </Typography>
              <Typography fontWeight={600} mb={1}>
                Now I love WordPress!
              </Typography>
              <Typography>
                I wouldn't recommend using any other web-building tool. I still
                remember what it is like to be a beginner, and I've kept that in
                mind while creating this entire course. I walk you through every
                process step-by-step to make sure you understand things clearly.
                And if there is ever anything that is confusing, just let me
                know and I'll create more lessons that explain or walk you
                through myself.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}></Grid>
      </Grid>
    </Box>
  );
};

export default ContentsDetails;
