"use client";
import Box from "@mui/material/Box";


const AppWebBlogLayout = ({
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
export default AppWebBlogLayout;
