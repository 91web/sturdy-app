import React from 'react';
import Box from "@mui/material/Box";
import CourseEvent from './components/course-details';
import ContentsDetails from './components/contents';
const CourseDetails = () => {
  return (
    <Box>
    <CourseEvent />
    <ContentsDetails />
    </Box>
  )
}

export default CourseDetails
