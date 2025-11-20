"use client";
import Box from "@mui/material/Box";
import RootAppBar from "../components/app-bar";


const AppWebBlogLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box>
      <Box id="homesturdy" component={"main"}>
        <RootAppBar />
        {children}
      </Box>
  
    </Box>
  );
};
export default AppWebBlogLayout;
