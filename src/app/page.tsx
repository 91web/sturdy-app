"use client";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AppProgressBar from "./components/app-progress";
import Image from "next/image";
import SturdyLogo from "../assets/svg/sturdy-logo.svg";

export default function Home() {
  const router = useRouter();
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/web");
    }, 1000);
    return () => {
      clearTimeout(redirectTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      bgcolor={"#fffff"}
    >
      <Box
        height={"fit-content"}
        margin={"auto"}
        width={{ xs: "50%", md: "20%" }}
        textAlign={"center"}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Image src={SturdyLogo} alt={"Sturdy logo"} priority={true} />
        </Box>
        <Box pt={2} px={4} width={"80%"} m={"auto"}>
          <AppProgressBar progress={progress} />
        </Box>
      </Box>
    </Box>
  );
}
