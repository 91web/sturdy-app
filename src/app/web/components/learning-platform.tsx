import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Platform1 from "../../../assets/svg/platform1.svg";
import Platform2 from "../../../assets/svg/platform2.svg";
import Platform3 from "../../../assets/svg/platform3.svg";
import Container from "@mui/material/Container";

const PlatForm = () => (
  <Box
    py={{ xs: 6, md: 8 }}
    bgcolor="#fff"
    borderRadius={2}
    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Container maxWidth="lg">
   <Box sx={{ textAlign: { xs: "left", md: "center" } }}>
  <Typography
    color="#404040"
    fontFamily="'Libre Baskerville'"
    fontSize={{ xs: 28, md: 36 }}
    my={4}
  >
    All-in-one learning platform...
  </Typography>
</Box>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ bgcolor: "#F1F5F1", p: 5, borderRadius: 2 }}
        >
          <Box>
            <Image
              src={Platform1.src}
              alt="Learning Platform"
              width={72}
              height={40}
            />
          </Box>
          <Box>
            <Typography
              color="#404040"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 22, md: 24 }}
              mb={1}
            >
              Trending Courses
            </Typography>
            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 15, md: 16 }}
              mb={1}
            >
              Explore new skills, deepen existing passions, and get lost in
              creativity. What you find would surprise and inspire you.
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ bgcolor: "#F1F5F1", p: 5, borderRadius: 2 }}
        >
          <Box>
            <Image
              src={Platform2.src}
              alt="Learning Platform"
              width={116}
              height={46}
            />
          </Box>
          <Box>
            <Typography
              color="#404040"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 22, md: 24 }}
              mb={1}
            >
              Books and Library
            </Typography>
            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 15, md: 16 }}
              mb={1}
            >
              Explore new skills, deepen existing passions, and get lost in
              creativity. What you find would surprise and inspire you.
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ bgcolor: "#F1F5F1", p: 5, borderRadius: 2 }}
        >
          <Box>
            <Image
              src={Platform3.src}
              alt="Learning Platform"
              width={42}
              height={45}
            />
          </Box>
          <Box>
            <Typography
              color="#404040"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 22, md: 24 }}
              mb={1}
            >
              Certified Teachers
            </Typography>
            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 15, md: 16 }}
              mb={1}
            >
              Our teachers are experts and industry rock stars excited to share
              their experience, wisdom, and tools with you.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default PlatForm;
