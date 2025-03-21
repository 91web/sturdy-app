"use client";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "@mui/material/styles/styled";
import { FC } from "react";
import "../theme/globals.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.MuiLinearProgress-colorPrimary`]: {
    backgroundColor: "#fff",
  },
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#084E06" : "#ededed",
  },
}));

interface IAppProgressProps {
  progress: number;
}

const AppProgressBar: FC<IAppProgressProps> = ({ progress }) => {
  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default AppProgressBar;
