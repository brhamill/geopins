import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Explore from '@material-ui/icons/Explore';
import Typography from '@material-ui/core/Typography';

const NoContent = ({ classes }) => {
  return <div>NoContent</div>;
};

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: '80px'
  }
});

export default withStyles(styles)(NoContent);
