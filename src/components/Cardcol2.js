import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        flex: 1.2,
        display: 'flex',
        flexDirection: 'column',
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

    const orders = props.description
    const listItem = orders && orders.map((order) =>
        (<Typography paragraph>{order}</Typography>)
    );
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
