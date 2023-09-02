import axios from "axios";

class UserService {

    static getAllUsers() {

        let url = "https://jsonplaceholder.typicode.com/users";
        return axios.get(url)
    }
}

export default UserService; 