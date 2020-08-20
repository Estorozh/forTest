import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        margin: '10vh auto',
        width: 320,
        borderRadius: 6,
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6
    },
    panel: {
        color: '#111'
    }
}));