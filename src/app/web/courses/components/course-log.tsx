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
import { SetStateAction, useState, useEffect, useMemo } from "react";

// Sample course data
const courses: CourseType[] = CourseData;

// Define the base URL
const baseUrl = "/web/courses/course-details";

const navItems = [
  "All",
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

const itemsPerPage = 8; // Set how many courses to display per page

const CourseCatalog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [filteredCourses, setFilteredCourses] = useState<CourseType[]>(courses);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    setPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (_event: unknown, value: SetStateAction<number>) => {
    setPage(value);
  };

  // Filter courses based on active nav item
  useEffect(() => {
    const activeFilter = navItems[activeIndex];

    if (activeFilter === "All") {
      setFilteredCourses(courses);
      return;
    }

    const filtered = courses.filter((course) => {
      const courseTags = course.tags || [];

      switch (activeFilter) {
        case "Paid":
          return course.price !== undefined && course.price > 0;
        case "Free":
          return course.price === 0 || course.price === undefined;
        case "Personal Development":
          return courseTags.some(
            (tag) =>
              tag.toLowerCase().includes("personal") ||
              tag.toLowerCase() === "personal development"
          );
        case "Women":
          return courseTags.some(
            (tag) =>
              tag.toLowerCase().includes("women") ||
              tag.toLowerCase() === "women"
          );
        case "Men":
          return courseTags.some(
            (tag) =>
              tag.toLowerCase().includes("men") || tag.toLowerCase() === "men"
          );
        case "Tech":
          return courseTags.some(
            (tag) =>
              tag.toLowerCase().includes("tech") || tag.toLowerCase() === "tech"
          );
        case "Data Analysis":
          return courseTags.some(
            (tag) =>
              tag.toLowerCase().includes("data") ||
              tag.toLowerCase().includes("analysis") ||
              tag.toLowerCase() === "data analysis"
          );
        case "Fullstack Development":
          return courseTags.some(
            (tag) =>
              tag.toLowerCase().includes("fullstack") ||
              tag.toLowerCase().includes("development") ||
              tag.toLowerCase() === "fullstack development"
          );
        case "more":
          // Show courses that don't fit into other categories
          return !courseTags.some((tag) =>
            [
              "paid",
              "free",
              "personal",
              "women",
              "men",
              "tech",
              "data",
              "analysis",
              "fullstack",
              "development",
            ].some((keyword) => tag.toLowerCase().includes(keyword))
          );
        default:
          return true;
      }
    });

    setFilteredCourses(filtered);
  }, [activeIndex, courses]);

  // Calculate the courses to display for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const displayedCourses = useMemo(
    () => filteredCourses.slice(startIndex, startIndex + itemsPerPage),
    [filteredCourses, startIndex]
  );
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

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
