import React, {useEffect, useState} from 'react'
import firebase from '@u/firebase'
import {Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {UserList} from '@c/users'
import {UserEdit} from '@c/userEdit'
import authProvider from '@u/auth'
import AuthPage from '@c/AuthPage/AuthPage'

const App = () => {
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
        loginPage={AuthPage}
        >
        <Resource name='users' list={UserList} edit={UserEdit} />
    </Admin>)
    : (<p style={{textAlign: 'center'}}>Load...</p>)
)
}
export default App