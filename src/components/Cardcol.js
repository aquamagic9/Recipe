import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../media/banana.png'
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '20px',
  },
  media: {
    height: 200,
    width: 400,
  },
  action: {
    display: 'flex-start',
    textAlign: 'left',
    flexDirection: 'row',
  },
  channelimg: {
    width: 40,
    height: 40
  },
  align: {
    display: 'flex'
  },
  divpad: {
    padding: '5px',
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            영상제목
          </Typography>
          <div className={classes.align}>
            <div className={classes.divpad}>
              <CardActionArea>
                <CardMedia
                  className={classes.channelimg}
                  image={image}
                  title="channelimg"
                />
              </CardActionArea>
            </div>
            <div className={classes.divpad}>
              <Typography variant="body1" component="h7">
                채널이름
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                구독자수 105.5만명
              </Typography>
            </div>
          </div>
          <CardActions>
            <Button size="small" color="primary">
              좋아요
            </Button>
            <Button size="small" color="primary">
              싫어요
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
