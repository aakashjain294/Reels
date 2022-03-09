import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import bg4 from '../../assets/bg4.jpg';
import Image from 'next/image';
import insta from '../../assets/insta.jpg';
import { Carousel } from 'react-responsive-carousel';
function index() {
    return (
        <div className="login-container">
            <div className="carbg">
                <div className="car">
                <Carousel 
                // showArrows = {false} 
                showStatus ={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                interval={1500}
                autoPlay={true}
                >
                    <Image src={bg1} />
                    <Image src={bg2} />
                    <Image src={bg3} />
                    <Image src={bg4} />
                </Carousel>
                </div>
            </div>
            <div>
                <div className="login-card">
                    <Image src={insta} />
                    <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" />
                    <TextField size="small" margin="dense" type="password" id="outlined-basic" fullWidth label="Password" variant="outlined" />
                    <div style={{ color: "red" }}>Error</div>
                    <Button size="small" fullWidth component="span" variant="contained" style={{ marginTop: "1rem" }} >
                        Login</Button>
                </div>
                <div style={{ color: "blue", marginTop: "0.5rem" }}>Forgot Password ?</div>
                <div className="bottom-card">
                    Don't have an account? <span style={{ color: "blue" }}>Sign Up</span>
                </div>
            </div>
        </div>
    )
}
export default index;