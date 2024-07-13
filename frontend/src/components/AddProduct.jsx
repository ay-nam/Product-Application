import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AddProduct() {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '75vh',
                }}
                noValidate
                autoComplete="off"
            >
                <Stack spacing={2} direction="column" alignItems='center'>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                    <TextField id="outlined-basic" label="Price" variant="outlined" />
                    <TextField id="outlined-basic" label="Category" variant="outlined" />
                    <Button variant="contained">Submit</Button>
                </Stack>
            </Box>
            
        </div>
    )
}
