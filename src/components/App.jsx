import React, {useEffect, useState} from 'react'
import Auth from '@c/auth/Auth'
import firebase from '@u/firebase'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import {Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {UserList} from '@c/users'
import {UserEdit} from '@c/userEdit'
import authProvider from '@u/auth'
import LoginPage from '@c/LoginPage/LoginPage'


const App = (props) => {
const [firebaseInitialized, setFirebaseInitialized] = useState(false)

useEffect(() => {
    firebase.isInitialized().then(val => {
        setFirebaseInitialized(val)
    })
})
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

return ( firebaseInitialized !== false 
    ? (
    <Admin 
        dataProvider={dataProvider} 
        authProvider={authProvider} 
        loginPage={LoginPage}
        >
        <Resource name='users' list={UserList} edit={UserEdit} />
    </Admin>)
    : (<p style={{textAlign: 'center'}}>Load...</p>)
)
}
export default App