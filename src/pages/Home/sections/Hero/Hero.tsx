import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/profile.jpeg"
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height:'100vh'
  }))

  const StyledImage = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StyledImage src={Avatar}></StyledImage>
            </Grid>
            <Grid item xs={8}>
              <Typography color="primary" variant="h1">Wender Filho</Typography>
              <Typography color="primary" variant="h2">I'm a Fullstack developer</Typography>
              <Button>
                <DownloadIcon/>
                Download CV
                </Button>
              <Button>Contact Me</Button>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
