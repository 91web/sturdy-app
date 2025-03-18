// "use client";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "@mui/material/styles/styled";
import { FC } from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.MuiLinearProgress-colorPrimary`]: {
    backgroundColor: "var(--app-lighter-gray)",
    // theme.palette.grey[theme.palette.mode === "light" ? 200 : 700],
  },
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light"
        ? "var(--app-default-color)"
        : "var(--app-default-color)",
  },
}));

interface IAppProgressProps {
  progress: number;
}
const AppProgressBar: FC<IAppProgressProps> = (props) => {
  const { progress } = props;

  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default AppProgressBar;
