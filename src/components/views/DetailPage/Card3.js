import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '2em 2em'
    },
    details: {
        flex: 1.4,
        display: 'flex',
        flexDirection: 'column',
        margin: '1em 1em'
    },
    content: {
        flex: '1 0 auto',
        textAlign: 'left'
    },
    cover: {
        flex: 1,
        minHeight: 200,
        maxHeight: 300,
        backgroundSize: "100% 100%",
    },
    recipebox: {
        flex: '1 0 auto',
        textAlign: 'left',
        overflow: "auto",
    }
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [expanded, setExpanded] = React.useState(false);

    const ingredients = props.ingredientsArr
    const ingredientsList = ingredients && ingredients.map((ingredient) =>
        (<span> {ingredient},</span>)
    );
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={props.thumbnails}
                title="thumbnails"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.channelTitle}
                    </Typography>
                    <Typography variant="h8">
                        음식 재료<br />
                        {ingredientsList}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}
