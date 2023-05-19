import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card } from 'antd';
const { Meta } = Card;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Main2 = () => {
  return (
    <>
    <div
        style={{
          height: "80vh",
          width: "80%",
          margin: "0 auto",
          padding: "150px 20px",
        }}
      >
        <h6
          style={{
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "24px",

            color: "#FF6551",
          }}
        >
          Team
        </h6>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "50px",
            color: "#252B42",
          }}
        >
          Video in Live Action
        </h2>
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",

            color: "#737373",
          }}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
       
    
        <Container maxWidth="sm" style={{marginTop:'50px'}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
             <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

      </Container>
      </div>
    </>
  )
}

export default Main2
