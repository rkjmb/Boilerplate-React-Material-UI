import Typography from '@material-ui/core/Typography';
import FillBox from '../../components/FillBox';

const NotFound = () => {
    return (
        <FillBox center>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="caption">Page Not Found</Typography>
            </div>
        </FillBox>
    )
}

export default NotFound
