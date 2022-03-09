import { Button } from '@mui/material'
import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
function Upload() {
    return (
        <div>
            <Button className='upload-btn' size="small" fullWidth component="label" variant="outlined" style={{ marginTop: "1rem" }} startIcon={<MovieIcon/>} ><input type="file" accept="image/*"  style={{ display: "none" }}  />
              Upload</Button>
            
              <LinearProgress variant="determinate" value={50} />
        </div>
    )
}

export default Upload
