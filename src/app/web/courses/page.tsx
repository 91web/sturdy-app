import { Banner } from "./components/banner";
import Box from "@mui/material/Box";
import CourseCatalog from "./components/course-log";

const CoursesPage = () => {
  return (
    <Box>
      <Banner
        title="Get a head-start with our courses"
        description={`
          Lorem ipsum dolor sit amet consectetur.
          Rhoncus non morbi rutrum cursus amet augue
          tempor etiam quis. Lorem ipsum dolor sit amet
          consectetur. Rhoncus non morbi rutrum cursus amet
           augue tempor etiam quis.`}
      />
      <CourseCatalog />
    </Box>
  );
};

export default CoursesPage;
