"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid2 from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TestimonialType, TestimonialData } from "./static-data/data";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Container from "@mui/material/Container";
import NextIcon from "../../../assets/svg/arrow1.svg";
import PreIcon from "../../../assets/svg/arrow2.svg";
import Rating from "@mui/material/Rating";

const TestimonialSlider = () => {
  // Sample data for testimonials
  const testimonials: TestimonialType[] = TestimonialData;
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleBack = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const NavigationButtons = () => (
    <Box sx={{ display: "flex", gap: 3, justifyContent: "left" }}>
      <Box
        onClick={handleBack}
        sx={{
          "&:hover": {
            bgcolor: "action.selected",
            width: 40,
            height: 40,
          },
          borderRadius: 5,
        }}
      >
        <Box>
          <Image src={NextIcon.src} alt="Next Icon" height={40} width={40} />
        </Box>
      </Box>
      <Box
        onClick={handleNext}
        sx={{
          "&:hover": {
            bgcolor: "action.selected",
            width: 40,
            height: 40,
          },
          borderRadius: 5,
        }}
      >
        <Box>
          <Image src={PreIcon.src} alt="Previous Icon" height={40} width={40} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ py: 2 }}>
      {/* Custom navigation arrows */}
      <Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Typography
              color="#404040"
              fontFamily={"'libre baskerville'"}
              fontSize={{ xs: 28, md: 36 }}
              mb={1}
            >
              Students’ Experiences
            </Typography>
             <Box sx={{ display: { xs: "none", md: "flex" }}}>
              <NavigationButtons />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box pl={{ xs: 1, md: "12%" }} my={8}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Scrollbar]}
          spaceBetween={20}
          onSwiper={setSwiper}
          slidesPerView={1} // Default for mobile
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={false} // Hide dots
          breakpoints={{
            // 1 slide on mobile
            0: {
              slidesPerView: 1,
            },
            // 3 slides on small screens
            600: {
              slidesPerView: 2,
            },
            // 3 slides on desktop
            960: {
              slidesPerView: 3.5,
            },
          }}
        >
          <Grid2 container spacing={2}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Grid2 size={{ xs: 12, sm: 8, md: 3 }}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 2,
                      height: "290px",
                      position: "relative",
                      bgcolor: "#F1F5F1",
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          bottom: 0,
                          // left: "50%",
                        }}
                      >
                        <Box
                          sx={{ position: "relative" }}
                          height={47}
                          width={47}
                        >
                          <Image
                            src={testimonial.avatar}
                            alt="Avatar Hero"
                            layout="fill"
                            objectFit="contain"
                          />
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Rating
                          value={Number(testimonial.rating)}
                          precision={0.5}
                          readOnly
                          sx={{ color: "#FFA500", my: 2 }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "'sf pro display'",
                            color: "#797979",
                            fontWeight: 400,
                            fontSize: 14,
                            textAlign: "center",
                            lineHeight: "160%",
                            my: 2,
                            maxHeight: "200px", // Increased height
                            overflow: "auto",
                            "&::-webkit-scrollbar": {
                              width: "4px",
                              height: "4px",
                            },
                            "&::-webkit-scrollbar-thumb": {
                              backgroundColor: "#888",
                              borderRadius: "2px",
                            },
                          }}
                        >
                          {testimonial.text}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 500,
                            textAlign: "center",
                            mt: "auto",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid2>
              </SwiperSlide>
            ))}
          </Grid2>
        </Swiper>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
