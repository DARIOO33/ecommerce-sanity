import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function Success(params) {
    return (
        <div className='fixed right-12 bottom-16'>

            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">Item added to your cart !</Alert>

            </Stack>
        </div>
    )
};
