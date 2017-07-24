import axios from 'axios';



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
        return axios.delete('/api/'+id);
    },

    saveUserInDB(user) {
        console.log('Saving user in db');
        console.log(user);

        return axios.post('/api/user/save', {user: user})
    },

    checkLogin(login) {
        console.log('Login Attempt Helper');
        console.log(login);
        return axios.post('/api/login')
    },

}

export default helpers;
