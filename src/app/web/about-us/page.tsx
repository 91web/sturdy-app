import Box from "@mui/material/Box";
import { Banner } from "./components/about-cover";
import Operation from "./components/operate-hero";
import BannerVision from "./components/banner-vision";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TeamHero from "./components/team-member";

const AboutUsPage = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        title="Learn about Here"
        description="Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis. Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum cursus amet augue tempor etiam quis."
      />
      <Operation />
      <Box width={"100%"}>
        <Divider sx={{ width: "100%" }} />
        <Container maxWidth="md">
          <Box p={2} textAlign="center">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography
                    color="#084E06"
                    fontFamily={"'libre baskerville'"}
                    fontSize={{ xs: 40, md: 50 }}
                  >
                    1k+
                  </Typography>
                  <Typography
                    color="#797979"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 16, md: 18 }}
                  >
                    Satisfied Students
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography
                    color="#084E06"
                    fontFamily={"'libre baskerville'"}
                    fontSize={{ xs: 40, md: 50 }}
                  >
                    8+
                  </Typography>
                  <Typography
                    color="#797979"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 16, md: 18 }}
                  >
                    Experienced Teachers
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography
                    color="#084E06"
                    fontFamily={"'libre baskerville'"}
                    fontSize={{ xs: 40, md: 50 }}
                  >
                    96+
                  </Typography>
                  <Typography
                    color="#797979"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 16, md: 18 }}
                  >
                    Courses Available
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Divider sx={{ width: "100%" }} />
      </Box>
      <BannerVision />
      <Box width={"100%"}>
        <TeamHero />
      </Box>
    </Box>
  );
};

export default AboutUsPage;
