import {Box,Button,TextField} from '@mui/material'

export default function BasicTextFields(){
    return(
        <Box 
        component="form"
        sx={{
            '& > :not(style)':{m:1, width:'25ch'},
            display:'flex',
            flexDirection:'column',
            backgroundColor:'white'
        }}
        noValidate
        autoComplete='off'
        >
            <TextField id='outlined-basic' label="Outlined" variant="outline"/>
            <TextField id='filled-basic' label='filled' variant='filled'/>
            <TextField id='standard-basic' label='Standard' variant='standard'/>
            <Button>Submit</Button>
        </Box>
    )
}