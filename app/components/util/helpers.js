import axios from 'axios';
import Querystring from 'queryString'

const helpers = {

    searchMemories(searchQuery) {
        console.log('Searching for articles');
    },

    saveMemoryInDB(memory) {
        console.log('Saving memory in db');
        console.log(memory.title);

        return axios.post('/api/save', {memory: memory})
    },

    getAllMemories() {
        console.log('Getting memories in db');
        return axios.get('/api');
    },

    deleteMemory(id) {
        console.log(`Deleting memory in db`);
        return axios.delete('/api/' + id);
    },

    saveUserInDB(user) {
        console.log('Saving user in db');
        console.log(user);

        return axios.post('/api/user/save', {user: user})
    },

    checkLogin(login) {
        console.log('Sending login form to backend');
        var data = Querystring.stringify({"email": login.email, "password": login.password});
        return axios.post('/auth/login', data)
    }
}

export default helpers;