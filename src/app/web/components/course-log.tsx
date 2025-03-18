"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { CourseData, CourseType } from "../components/static-data/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Sample course data
const courses: CourseType[] = CourseData;

 const CourseCatalog = () => {
  return (
    <Box pb={8}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 3,
          }}
        >
          <Typography
            color="#404040"
            fontFamily="'Libre Baskerville'"
            fontSize={{ xs: 28, md: 36 }}
            my={4}
            textAlign={{ xs: "left", md: "center" }}
          >
            Courses to help your aspirations
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "green",
              }}
            >
              See all <ArrowForwardIosIcon sx={{ ml: 0.5, fontSize: 18 }} />
            </Link>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={course.id}>
              <Card
                sx={{
                  height: "100%",
                  boxShadow: "none",
                  border: "1px solid #eee",
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    color="#252525"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 22, md: 24 }}
                    mb={1}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    color="#797979"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 15, md: 16 }}
                    mb={1}
                  >
                    {course.description}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Box>
                      <Typography
                        color="#797979"
                        fontFamily={"'sf pro display'"}
                        fontSize={{ xs: 15, md: 16 }}
                        fontWeight="600"
                      >
                        {course.instructor.name}
                      </Typography>
                      <Typography
                        color="#797979"
                        fontFamily={"'sf pro display'"}
                        fontSize={{ xs: 15, md: 16 }}
                      >
                        {course.instructor.title}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: { xs: "block", md: "none" } , mt:4}}>
          <Link
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "green",
            }}
          >
            See all <ArrowForwardIosIcon sx={{ ml: 0.5, fontSize: 18 }} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default CourseCatalog;