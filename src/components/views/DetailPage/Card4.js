import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '1em 2em',
        border: '1px solid black',
        boxShadow: '1px 1px 1px 1px gray',
        borderRadius: '10px'
    },
    content: {
        alignItems:'center',
    }
}));

export default function Card4(props) {
    const classes = useStyles();

    const orders = props.description
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                {orders}
            </CardContent>
        </Card>
    );
}
