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
import ToolIcon from "../../../../assets/svg/tool-icon.svg";
import Image from "next/image";
import { CourseData, CourseType } from "../../components/static-data/data";
import Pagination from "@mui/material/Pagination";
import Toolbar from "@mui/material/Toolbar";
import { SetStateAction, useState } from "react";

// Sample course data
const courses: CourseType[] = CourseData;

// Define the base URL
const baseUrl = "/web/courses/course-details";

const navItems = [
  "Paid",
  "Free",
  "Personal Development",
  "Women",
  "Men",
  "Tech",
  "Data Analysis",
  "Fullstack Development",
  "more",
];

const itemsPerPage = 14; // Set how many courses to display per page

const CourseCatalog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(1);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePageChange = (_event: unknown, value: SetStateAction<number>) => {
    setPage(value);
  };

  // Calculate the courses to display for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const displayedCourses = courses.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  return (
    <Box pb={8}>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: "center",
            my: 3,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Box>
              <Image
                src={ToolIcon.src}
                alt="Course tools"
                width={25}
                height={20}
              />
            </Box>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                onClick={() => handleLinkClick(index)}
                underline={activeIndex === index ? "always" : "none"}
                sx={{
                  color: activeIndex === index ? "#084E06" : "inherit",
                  "&:hover": {
                    color: "inherit",
                  },
                  py: activeIndex === index ? 2 : 0,
                  mb: activeIndex === index ? 1 : 0,
                }}
              >
                <Typography
                  fontFamily={"'sf display pro'"}
                  fontSize={{ xs: 16, md: 18 }}
                  color="#7E7E7E"
                >
                  {item}
                </Typography>
              </Link>
            ))}
          </Toolbar>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {displayedCourses.map((course) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={course.id}>
                <Link
                  href={`${baseUrl}/${course.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: "none",
                      border: "1px solid #eee",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          bottom: "0px",
          left: "0px",
          right: "0px",
          zIndex: 1,
          my: 5,
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": { bgcolor: "#084E06" },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default CourseCatalog;
