import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { TeamMemberD, TeamMemberType } from "../../components/static-data/data";

export default function TeamHero() {
  const teamMembers: TeamMemberType[] = TeamMemberD;

  return (
    <Box sx={{ bgcolor: "#E1E7E1" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", my: 6 }}>
          <Typography
            color="#404040"
            fontFamily={"'libre baskerville'"}
            fontSize={{ xs: 28, md: 36 }}
            mb={1}
          >
            Meet the Team
          </Typography>
          <Typography
            color="#404040"
            fontFamily={"'sf pro display'"}
            fontSize={{ xs: 16, md: 18 }}
            mb={1}
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Lorem ipsum dolor sit amet consectetur. Lectus molestie est in cras
            aliquam faucibus. Fusce quis urna nisl sapien lacus arcu tempus eu.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.id}>
              <Card elevation={0} sx={{ height: "100%", bgcolor: "#E1E7E1" }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    height: 240,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
                <CardContent sx={{ px: 0 }}>
                  <Typography
                    color="#404040"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 16, md: 18 }}
                    mb={0.5}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    color="#063D05"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 16, md: 18 }}
                    mb={0.5}
                  >
                    {member.title}
                  </Typography>
                  <Typography
                    color="#667085"
                    fontFamily={"'sf pro display'"}
                    fontSize={{ xs: 14, md: 16 }}
                    mb={0.5}
                  >
                    {member.bio}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small" aria-label="Twitter">
                      <TwitterIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="LinkedIn">
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" aria-label="Website">
                      <LanguageIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
