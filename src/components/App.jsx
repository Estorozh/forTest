import React from 'react'
import {render} from 'react-dom'
// import {Admin, Resource, EditGuesser} from 'react-admin'
// import jsonServerProvider from 'ra-data-json-server'
// import {UserList} from './users'
// import {UserEdit} from './userEdit'

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
// const App = (props) => {
//     return (
//     <Admin dataProvider={dataProvider} >
//         <Resource name='users' list={UserList} />
//     </Admin>
//     )
// }
// export default App

export default class App extends React.Component {
    render() {
        return (<>
            <h1 style={{textAlign:'center'}}>Login Block</h1>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="name" /><br />
                <input type="password" placeholder="password" style={{margin: '10px 0'}}/><br />
                <input type="submit" value="login" />
            </div>
        </>)
    }
}