import firebase from '@u/firebase'
//переделать на firebase  с регистрацией.
export default {
    login: ({ email, password }) => {
        async function RequestFirebase() {
            try {
                await firebase.login(email, password)
                localStorage.setItem('username', email)
                location = './users'
            } catch(err) {
                alert(err.message)
            }
        }
        RequestFirebase()
        return Promise.resolve()
    },

    logout: () => {
        localStorage.removeItem('username')
        firebase.logout()
        return Promise.resolve()
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};