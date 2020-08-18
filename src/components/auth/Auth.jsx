import React from 'react'
import * as firebase from 'firebase'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            isAuth: false,
            users: '',
            key: '',
            value: '',
            numTab: 0,
            base: ''
        }
    }

    componentDidMount() {
        // const ui = new firebase.auth.AuthUI(firebase.auth())
        const db = firebase.database()
        db.ref('name').on('value', el => {this.setState({users: el.val()});} )
        this.getData()
    }

    handleChange = ({target: {value, id}}) => {
        this.setState({
            [id]: value
        })
    }

    // handleChangeTab = (_, newTab) => {
    //     this.setState({numTab: newTab})
    // }

    sendData = () => {
        const {key, value} = this.state
        const db = firebase.database()
        db.ref(key).push(value)
        alert('your data was written to db')
    }

    getData = () => {
        const db = firebase.database()
        console.log(db.ref().on("value", (el)=>{this.setState({base: el.val()})} ))
    }

    render() {
        // const {isAuth, numTab} = this.state
        return (<>
                <form onSubmit={this.sendData} onSubmit={this.sendData}>
                    <input type="text" id="key" onChange={this.handleChange}/>
                    <input type="text" id="value" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
                {   console.log(this.state)
                    // <form onSubmit={this.createAccount}>
                    // <input type="text" placeholder="name" id="name" onChange={this.handleChange} value={this.state.name}/><br />
                    // <input type="password" id="password" style={{margin: '10px 0'}} onChange={this.handleChange} value={this.state.password}/><br />
                    // <input type="submit" value="SignUp" />
                    // </form>
                
                    // <form onSubmit={this.login}>
                    // <input type="text" placeholder="name" id="name" onChange={this.handleChange} value={this.state.name} /><br />
                    // <input type="password" id="password" style={{margin: '10px 0'}} onChange={this.handleChange} value={this.state.password}/><br />
                    // <input type="submit" value="login" />
                    // </form>
                }
            </>)
    }
}