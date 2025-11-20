// File: app/components/course-details/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CourseData, CourseType } from "../../../components/static-data/data"; // Adjust path to your data file
import Link from "next/link";

const CourseDetailPage = () => {
  const params = useParams();
  const courseId = params.id as string;

  // Find the course that matches the dynamic ID
  const course: CourseType | undefined = CourseData.find(
    (item: { id: string }) => item.id === courseId
  );

  if (!course) {
    return (
      <Container>
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="h4" color="error">
            Course Not Found
          </Typography>
          <Button
            variant="contained"
            onClick={() => window.history.back()}
            sx={{ mt: 2 }}
          >
            Go Back
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card elevation={0}>
        <CardMedia
          component="img"
          height="600"
          image={course.image}
          alt={course.title}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {course.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Instructor: {course.instructor.name}
          </Typography>
          <Typography variant="body1">{course.description}</Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#CCCCCC",
                color: "#fff",
                textTransform: "none",
                fontFamily: "sf pro display",
                fontSize: 18,

                bgcolor: "#084E06",
                "&:hover": {
                  bgcolor: "#0B6A0B",
                  borderColor: "#CCCCCC",
                },
              }}
            >
              Enroll Now
            </Button>
            <Link href="/web/courses">
              <Button
                variant="outlined"
                sx={{
                  mx: 2,
                  color: "#084E06",
                  textTransform: "none",
                  //   "& .MuiPaginationItem-root.Mui-selected": { bgcolor: "#084E06" },
                }}
              >
                Back to Courses
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CourseDetailPage;
