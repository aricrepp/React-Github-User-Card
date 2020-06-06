import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "./CardCreate.css"
import { CardContent } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
      maxWidth: 345,
      margin: 30,
    },
    
  }));

const CardCreate = props => {
    const classes = useStyles();
    
    return (
        <div className="container_">
          {props.followers.map(item =>(
            <Card className={classes.root}>
                <CardHeader
                    avatar={<Avatar src={item.avatar_url} ></Avatar>}
                    title={item.login}
                    subheader="subheader"
                /> 
                <CardContent>
                    <Typography>
                        Followers: 
                    </Typography>
                    {item.followers}
                </CardContent>
            </Card>
        ))}  
        </div>
    );
  
}

export default CardCreate;

