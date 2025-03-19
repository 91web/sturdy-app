import Box from "@mui/material/Box";
import Image from "next/image";
import BannerImage from "../../../assets/img/enrol-hero.png";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface BannerProps {
  title: string;
  description: string;
  btnElement?: ReactNode;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "400px", md: "650px" },
        backgroundImage: `url(${BannerImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Image
          src={BannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "400px", md: "500px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "80%", lg: "50vw", xl: "40vw" },
            textAlign: "center",
            zIndex: 2,
            px: { xs: 2, md: 5 },
            // pt: { xs: "89px", md: "95px" },
          }}
        >
          <Typography
            // variant="h3"
            sx={{
              color: "#fff",

              fontSize: { xs: "30px", md: "54px" },
              maxWidth: "90%",
              fontFamily: "'libre baskerville'",
              mx: "auto",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              // maxWidth: "80%",
              fontSize: { xs: "16px", md: "20px" },
              mx: "auto",
              fontFamily: "'sf pro display'",
              // mt: { xs: 0.5, md: 1 },
              color: "#CCCCCC",
            }}
          >
            {description}
          </Typography>
      
        </Box>
      </Box>
    </Box>
  );
};
