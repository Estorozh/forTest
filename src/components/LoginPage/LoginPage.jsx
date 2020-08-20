import React, {useState} from 'react'
import {useLogin} from 'react-admin'

import PropTypes from 'prop-types'
import useStyles from './styledLoginPage'
import {AppBar, Tabs, Tab, Typography, Box, Button} from '@material-ui/core'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = useLogin()
    const submit = (e) => {
        e.preventDefault();
        login({ email, password })
    };

    return (
            <form onSubmit={submit} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" /> 
                <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{margin: "10px 0"}} placeholder="password" />
                <Button onClick={submit} variant="contained" color="primary" style={{width: '100%'}} >login</Button>
            </form>
    );
};

// export default LoginPage

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="SignUp" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.panel}>
        <LoginPage />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.panel}>
        Register
      </TabPanel>
    </div>
  );
}



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }