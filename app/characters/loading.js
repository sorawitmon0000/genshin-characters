import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
    return (
        <div className='container w-full h-screen'>
            <div className='items-center'>
                <CircularProgress size="5rem" />
            </div>
        </div>
    );
}