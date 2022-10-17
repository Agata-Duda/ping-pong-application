import {Header} from '../components/shared/Header';
import {Footer} from '../components/shared/Footer';
import {Box} from '@mui/material';

const styles = {
    box: {
        marginTop: '158px',
    }
}

export const PageTemplate = ({children}) => (
    <Box sx={styles.box}>
        <Header/>
        {children}
        <Footer/>
    </Box>
);


