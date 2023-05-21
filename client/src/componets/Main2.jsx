import { BASE_URL } from "../api/base_url";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, Typography } from "antd";
export const getAllPeoples = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL+'/students';
  }
  else{
    URL = BASE_URL+'/students'+`?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

const Main2 = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getAllPeoples().then((res) => {
      setPeoples(res);
    });
  }, []);
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
        <Box    
        sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}
      >
    

        <Grid container spacing={2}>
          {peoples &&
            peoples.map((people) => {
              return (
                <Grid key={people._id} item lg={3} md={6} sm={12}>
                  <Card
                  >
                  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://assets.website-files.com/634681057b887c6f4830fae2/6367ddcdcaac03478d077305_62c5ecdd62c665518919f68d_Dev%2520Experience.png" />}
  >
  </Card>
                    <Typography>  Name: {people.name}</Typography>

                    <Typography>Surname: {people.surname}</Typography>
                    
                  


                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    
        
      </div>
    </>
  )
}

export default Main2
