"use client";
import Box from "@mui/material/Box";

const AppWebCourseLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box>
      <Box id="homesturdy" component={"main"}>
        {children}
      </Box>
    </Box>
  );
};
export default AppWebCourseLayout;
