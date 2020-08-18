import React, {useEffect, useState} from 'react'
import Auth from '@c/auth/Auth'
import Dashboard from '@c/Dashboard/Dashboard'
import firebase from '@u/firebase'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const App = (props) => {
const [firebaseInitialized, setFirebaseInitialized] = useState(false)

useEffect(() => {
    firebase.isInitialized().then(val => {
        setFirebaseInitialized(val)
    })
})

return ( firebaseInitialized !== false ? (
    <Router>
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>)
    : (<span>Load...</span>)
)
}
export default App