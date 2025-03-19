import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const EnrolBanner = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#E1E7E1",
          color: "#fff",
          py: 4,
          textAlign: "center",
          height: "400px",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 4,
            }}
          >
            <Typography
              color="#404040"
              fontFamily="'libre baskerville'"
              fontSize={{ xs: 28, md: 36 }}
              mb={1}
            >
              Take your learning to
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              <span>the next level with just one click</span>
            </Typography>

            <Typography
              color="#797979"
              fontFamily={"'sf pro display'"}
              fontSize={{ xs: 16, md: 18 }}
              mb={1}
              sx={{ textAlign: "center", width: { xs: "100%", md: "80%" } }}
            >
              Lorem ipsum dolor sit amet consectetur. Rhoncus non morbi rutrum
              cursus amet augue tempor etiam quis. morbi rutrum cursus amet
              augue tempor etiam quis.
            </Typography>
            <Box py={2}>
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
                Enrol now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default EnrolBanner
