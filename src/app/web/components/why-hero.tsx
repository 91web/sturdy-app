import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Hero4 from "../../../assets/img/home-hero3.png";
import Container from "@mui/material/Container";

const WhyUs = () => (
  <Box py={4} bgcolor="#f5f5f5" borderRadius={2} textAlign="center">
    <Container maxWidth="lg">
      <Box>
        <Typography
          color="#404040"
          fontFamily="'Libre Baskerville'"
          fontSize={{ xs: 28, md: 36 }}
          my={4}
          textAlign={{ xs: "left", md: "center" }}
        >
          Why choose us for your courses?
        </Typography>
      </Box>
      <Box>
        <Grid2 container spacing={8} mb={4} justifyContent="center">
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={Hero4.src}
              alt="Why Choosing Us"
              sx={{
                width: "100%",
                minHeight: { xs: "300px", sm: "300px", md: "auto" },
                objectFit: "cover",
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box textAlign={"left"} mt={2}>
              <Box sx={{ width: { xs: "100%", md: "90%" } }}>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 22, md: 24 }}
                  mb={1}
                >
                  Professional Trainers
                </Typography>
                <Typography
                  color="#797979"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 15, md: 16 }}
                  mb={2}
                >
                  Learn from industry professionals and experts across all
                  fields.
                </Typography>
                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 22, md: 24 }}
                  mb={1}
                >
                  International Certifications
                </Typography>
                <Typography
                  color="#797979"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 15, md: 16 }}
                  mb={2}
                >
                  Demonstrate your commitment to superior professionalism,
                  upholding industry standards, and continued learning.
                </Typography>

                <Typography
                  color="#404040"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 22, md: 24 }}
                  mb={1}
                >
                  Access to Mentorship
                </Typography>
                <Typography
                  color="#797979"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 15, md: 16 }}
                  mb={2}
                >
                  Get feedback and directions from mentors available to assist.
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={4}>
                  Embark on the path to an improved life by enrolling in
                  practical online courses at SturdyWings.
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#084E06",
                    textTransform: "none",
                    height: "51px",
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "'sf pro display'",
                    "&:hover": {
                      bgcolor: "#0B5A3A",
                      color: "#fff",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Enrol now
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  </Box>
);

export default WhyUs;
