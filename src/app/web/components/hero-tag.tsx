import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TypoBox = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: { xs: "0%", md: "-10%" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* First Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(6px)",
          borderRadius: "10px",
          border: "1px solid #E1E1E1",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 59px 60px 34px rgba(0, 0, 0, 0.01), 33px 34px 28px rgba(0, 0, 0, 0.05)",
          p: "10px 10px",
          height: { xs: "38px", md: "40px" },
          width: { xs: "180px", md: "200px" },
          marginLeft: { xs: "35px", md: "-17px" },
          marginTop: { xs: "5px", md: "-7px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 18, md: 24 },
            color: "#084E06",
            mr: 1,
          }}
        >
          1k+
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#4F4F4F" }}>
          Satisfied Students
        </Typography>
      </Box>

      {/* Second Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(6px)",
          borderRadius: "10px",
          border: "1px solid #E1E1E1",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 59px 60px 34px rgba(0, 0, 0, 0.01), 33px 34px 28px rgba(0, 0, 0, 0.05)",
          p: "10px 10px",
          height: { xs: "38px", md: "40px" },
          width: { xs: "180px", md: "200px" },
          marginLeft: { xs: "20px", md: "-40px" },
          marginTop: { xs: "10px", md: "15px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 18, md: 26 },
            color: "#084E06",
            mr: 1,
          }}
        >
          8+
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#4F4F4F" }}>
          Experienced Teachers
        </Typography>
      </Box>

      {/* Third Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(6px)",
          borderRadius: "10px",
          border: "1px solid #E1E1E1",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 59px 60px 34px rgba(0, 0, 0, 0.01), 33px 34px 28px rgba(0, 0, 0, 0.05)",
          p: "10px 10px",
          height: { xs: "38px", md: "40px" },
          width: { xs: "180px", md: "200px" },
          marginLeft: { xs: "0px", md: "-60px" },
          marginTop: { xs: "15px", md: "15px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 18, md: 26 },
            color: "#084E06",
            mr: 1,
          }}
        >
          96+
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#4F4F4F" }}>
          Courses Available
        </Typography>
      </Box>
    </Box>
  );
};

export default TypoBox;
