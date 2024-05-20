import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/profile.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]:{
      paddingTop:"100px"
    },
    [theme.breakpoints.up("md")]:{
      paddingTop:"0px"
    }
  }))

  const StyledImage = styled("img")(() => ({
    width: "80%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "55%"
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign={"center"}>
                <StyledImage src={Avatar}></StyledImage>
                </Box>
              </Box>
              
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Wender Filho</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Fullstack developer</Typography>
              <Grid container display="flex" justifyContent="center" spacing="10" pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                  <StyledButton onClick={()=>console.log("download")}>
                    <DownloadIcon />
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={()=>console.log("contact")}>
                    <ContactMailIcon />
                    <Typography>
                      Contact Me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>


            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
