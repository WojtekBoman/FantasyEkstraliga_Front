import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  role: {
    color: theme.palette.getContrastText("#0275d8"),
    backgroundColor: "#0275d8",
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginLeft: theme.spacing(1),
    fontSize: "small"
  },
}));

export default function LetterAvatar(props) {
  const classes = useStyles();

  return (
  
     <span> <Avatar className={classes.role}><span className="font-weight-bold">{props.letter}</span></Avatar></span>
  
  );
}