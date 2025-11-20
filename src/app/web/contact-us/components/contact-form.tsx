"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import ContactHero2 from "../../../../assets/img/contact-hero.png";
import Icon1 from "../../../../assets/svg/mail-icon1.svg";
import Icon2 from "../../../../assets/svg/mail-icon2.svg";
import Image from "next/image";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ContactForm() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formDetails);
  };
  return (
    <Box py={6}>
      <Container maxWidth="md">
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                display="flex"
                alignItems="center"
                sx={{ mb: { xs: 2, md: 0 } }}
              >
                <Image src={Icon1} alt="mail" height={16} width={20} />
                <Typography
                  color="#828282"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 15, md: 16 }}
                  m={2}
                >
                  admin@sturdywingsedu.com
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                display="flex"
                alignItems="center"
                sx={{ ml: { xs: 0, md: 2 } }}
              >
                <Image src={Icon2} alt="mail" height={16} width={20} />
                <Typography
                  color="#828282"
                  fontFamily={"'sf pro display'"}
                  fontSize={{ xs: 15, md: 16 }}
                  m={2}
                >
                  NG: +234 8149116211<br />
                  US: +234 81-49-116-211 
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Box>

        {/* Contact Info Cards */}
        <Box>
          <Typography
            color="#797979"
            fontFamily={"'libre baskerville'"}
            fontSize={{ xs: 40, md: 54 }}
            mb={2}
          >
            Contact Us
          </Typography>
        </Box>

        {/* Contact Form Section */}
        <Box>
          <Grid2 container spacing={8}>
            <Grid2 size={{ xs: 12, md: 6.5 }}>
              <Box>
                <Box component="form" sx={{ mt: 4 }}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <FormControl fullWidth>
                        <Box py={1}>
                          <FormLabel>First Name</FormLabel>
                        </Box>
                        <TextField
                          name="firstName"
                          onChange={handleChange}
                          fullWidth
                          placeholder="Jane Smith"
                          variant="outlined"
                          helperText={null}
                          slotProps={{
                            input: {
                              style: {
                                height: "40px",
                              },
                            },
                          }}
                        />
                      </FormControl>
                    </Grid2>

                    <Grid2 size={{ xs: 12, md: 6 }}>
                      <FormControl fullWidth>
                        <Box py={1}>
                          <FormLabel>Email</FormLabel>
                        </Box>
                        <TextField
                          name="email"
                          onChange={handleChange}
                          fullWidth
                          placeholder="email@janesfakedomain.net"
                          variant="outlined"
                          type="email"
                          slotProps={{
                            input: {
                              style: {
                                height: "40px",
                              },
                            },
                          }}
                        />
                      </FormControl>
                    </Grid2>
                    <Grid2 size={12}>
                      <FormControl fullWidth>
                        <Box py={1}>
                          <FormLabel>Subject</FormLabel>
                        </Box>
                        <TextField
                          fullWidth
                          name="subject"
                          onChange={handleChange}
                          variant="outlined"
                          placeholder="Enter Subject"
                          type="text"
                          slotProps={{
                            input: {
                              style: {
                                height: "40px",
                              },
                            },
                          }}
                        />
                      </FormControl>
                    </Grid2>

                    <Grid2 size={12}>
                      <FormControl fullWidth>
                        <Box py={1}>
                          <FormLabel>Your Message</FormLabel>
                        </Box>
                        <TextField
                          onChange={handleChange}
                          fullWidth
                          multiline
                          rows={4}
                          variant="outlined"
                          placeholder="Enter your question or message"
                          name="message"
                          slotProps={{
                            input: {
                              style: {
                                height: "100%",
                              },
                            },
                          }}
                        />
                      </FormControl>
                    </Grid2>

                    <Grid2 size={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        disabled={
                          !formDetails.firstName ||
                          !formDetails.email ||
                          !formDetails.subject ||
                          !formDetails.message
                        }
                        onClick={handleSubmit}
                        sx={{
                          textTransform: "none",
                          bgcolor: "#084E06",
                          "&:hover": {
                            bgcolor: "#0B6A0B",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Grid2>
                  </Grid2>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5.5 }}>
              <Box>
                <Box
                  component="img"
                  src={ContactHero2.src}
                  alt="Contact team"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 2,
                    display: { xs: "none", md: "flex" },
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}
