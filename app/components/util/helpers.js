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
        console.log(user.name);

        return axios.post('/api/user/save', {user: user})
    },

}

export default helpers;
