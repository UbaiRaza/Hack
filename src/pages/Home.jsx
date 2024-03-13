import React from "react";
import "./Home.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export const Home = () => {
  return <div className="home">
    <img src='https://static.vecteezy.com/system/resources/thumbnails/008/191/708/small/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg' alt="" />




    <div style={{ marginLeft: '10%', marginTop: '30px' }} className="row">
      <div className="col-md-6">
        <Link to='donation'>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 500, width: 500 }}
              image="https://media.gettyimages.com/id/143174580/photo/blood-bag-heart-donate-concept.jpg?s=1024x1024&w=gi&k=20&c=eYvbgqzUlt0rw4JoKYSX3ph2FOLy09YaKl2sxL_Bdfc="
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Donation
              </Typography>

            </CardContent>
            <CardActions>
              <Typography variant="h6">
                Blood donation is a vital part of worldwide healthcare. It relates to blood transfusion as a life-sustaining and life-saving procedure as well as a form of therapeutic phlebotomy as a primary medical intervention. Over one hundred million units of blood are donated each year throughout the world.
              </Typography>
            </CardActions>
          </Card>
        </Link>

      </div >
      <div className="col-md-6">

        <Link to='recives'>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 500, width: 500 }}
              image="https://media.gettyimages.com/id/1376693433/photo/voluntary-blood-donation-on-the-go-and-hemodialysis.jpg?s=612x612&w=0&k=20&c=5F1yqiC968wBtm4-0BX-2lZeR0gVCLTf5tI8d58yN9M="
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reciver
              </Typography>

            </CardContent>
            <CardActions>
              <Typography variant="h6">
                Other than that, blood donation also helps us know about our bodies. As a blood donation requires a preliminary health check-up, we get a complete diagnosis. It makes us aware of the levels of iron, hemoglobin, cholesterol and more.It is a great initiative that must be encouraged everywhere.
              </Typography>
            </CardActions>
          </Card>
        </Link>
      </div>
    </div>


  </div>;
};
