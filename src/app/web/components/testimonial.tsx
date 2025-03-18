import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Rating from "@mui/material/Rating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Kambili Gold",
    rating: 4.5,
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse pron.",
  },
  {
    id: 2,
    name: "Raphael Emmanuel",
    rating: 4.5,
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse pron.",
  },
  {
    id: 3,
    name: "Joseph Etim",
    rating: 4.5,
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse pron.",
  },
  {
    id: 4,
    name: "Jane Smith",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. In vel neque euismod sem auctor tortor purus aliquam lobortis. Molestie tincidunt pellentesque malesuada dictumst nulla sed suspendisse pron.",
  },
];

export default function TestimonialSlider() {
  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 500,
            color: "#333",
            fontFamily: '"Serif", serif',
          }}
        >
          Students&apos; Experiences
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            className="swiper-button-prev"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            className="swiper-button-next"
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Box
              sx={{
                bgcolor: "#f5f8f5",
                borderRadius: 2,
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Avatar
                  sx={{ width: 64, height: 64, mb: 2, bgcolor: "#e0e0e0" }}
                  alt={testimonial.name}
                />
                <Rating
                  value={testimonial.rating}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#FFA500", mb: 2 }}
                />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  textAlign: "center",
                  mb: 2,
                  flexGrow: 1,
                }}
              >
                {testimonial.text}
              </Typography>

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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
