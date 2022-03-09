import React from "react";
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import insta from '../../assets/insta.jpg';
import { Button } from "@mui/material";
function index() {
    return (
        <div className="signup-container">
            <div className="signup-card">
                <Image src={insta} />
                <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Email" variant="outlined" />
                <TextField size="small" margin="dense" type="password" id="outlined-basic" fullWidth label="Password" variant="outlined" />
                <TextField size="small" margin="dense" id="outlined-basic" fullWidth label="Full Name" variant="outlined" />
                <Button size = "small" fullWidth component="label" variant="outlined" style={{ marginTop: "1rem" }} ><input type="file" accept="image/*" style={{ display: "none" }} />
                    Upload</Button>
                <Button size = "small" fullWidth component="span" variant="contained" style={{ marginTop: "1rem" }} >
                    Sign Up</Button>
            </div>
            <div className="bottom-card">
                Already have an account? <span style={{color : "blue"}}>Login</span>
           </div>
        </div>
    )
}
export default index;