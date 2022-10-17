import React from "react";
import { routes } from "../components/util/util";
import {OptionCard} from '../components/home/OptionCard';
import {PageTemplate} from '../templates/PageTemplate';
import {Stack} from '@mui/material';
import ScoreBoardCardImage from '../Images/ScoreBoardCardImage.png';
import bookingCardImage from '../Images/bookingCardImage.png';
import predictionCardImage from '../Images/predictionCardImage.png';

const Home = () => (
    <PageTemplate>
           <Stack justifyContent="center" alignItems="center" direction="row" m={3}>
               <OptionCard
                   image={bookingCardImage}
                   title="Booking"
                   description="Book a 15 minute Ping Pong Slot"
                   path={routes.bookingPage}
               />
               <OptionCard
                   image={predictionCardImage}
                   title="Prediction service"
                   description="Who will win the match?"
                   path={routes.predictionPage}
               />
               <OptionCard
                   image={ScoreBoardCardImage}
                   title="Score boards"
                   description="Score Board of Tournaments"
                   path={routes.scoreBoardPage}
               />
           </Stack>
    </PageTemplate>
    );
export default Home;