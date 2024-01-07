import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:9080/inventory";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(inventory){
        return axios.post(USER_API_BASE_URL, inventory);
    }

    getUserById(inventoryId){
        return axios.get(USER_API_BASE_URL + '/' + inventoryId);
    }

    updateUser(inventory, inventoryId){
        return axios.put(USER_API_BASE_URL + '/' + inventoryId, inventory);
    }

    deleteUser(inventoryId){
        return axios.delete(USER_API_BASE_URL + '/' + inventoryId);
    }
}

export default new UserService()