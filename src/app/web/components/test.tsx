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
import NextIcon from "../../../assets/img/slide-icon1.png";
import PreIcon from "../../../assets/img/slide-icon2.png";
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
          <Image src={NextIcon.src} alt="Next Icon" height={47} width={47} />
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
          <Image src={PreIcon.src} alt="Previous Icon" height={47} width={47} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ py: 2 }}>
      <Box px={{ xs: 1, md: 0 }} mb={2}>
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
              slidesPerView: 2.6,
            },
          }}
        >
          <Grid2 container spacing={2}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Grid2 size={{ xs: 12, sm: 8, md: 4 }}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 5,
                      height: "290px",
                      position: "relative",
                    }}
                  >
                    <CardContent>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "var(--font-source-sans)",
                            color: "#3E3E3E",
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
                          “{testimonial.quote}”
                        </Typography>
                      </Box>
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

                        <Box sx={{ ml: 2 }}>
                          <Typography
                            sx={{
                              fontFamily: "var(--font-source-sans)",
                              color: "#3E3E3E",
                              fontWeight: 600,
                              fontSize: 14,
                              textAlign: "left",
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "var(--font-source-sans)",
                              color: "#3E3E3E",
                              fontWeight: 400,
                              fontSize: { xs: 12, md: 14 },
                              textAlign: "left",
                            }}
                          >
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid2>
              </SwiperSlide>
            ))}
          </Grid2>
        </Swiper>
      </Box>
      {/* Custom navigation arrows */}
      <Box>
        <Container>
          <Box
            sx={{
              position: "absolute",
              bottom: "0%",
              right: 80,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <NavigationButtons />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
