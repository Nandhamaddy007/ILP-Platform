import { Box, CircularProgress, Typography } from "@mui/material";

export default function CircularProgressComponent(props){
return(
    <>
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={30} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" >
          {`${Math.round(30)}%`}
        </Typography>
      </Box>
    </Box>
    </>
)
}