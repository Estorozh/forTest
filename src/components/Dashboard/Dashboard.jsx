import React from 'react'
import {Admin, Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import {UserList} from '@c/users'
import {UserEdit} from '@c/userEdit'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const Dashboard = (props) => {
    return (
        <Admin dataProvider={dataProvider} >
            <Resource name='users' list={UserList} edit={UserEdit} />
        </Admin>
    )
}
export default Dashboard