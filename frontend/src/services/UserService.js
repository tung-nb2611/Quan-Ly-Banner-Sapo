import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/users";

const USER_API_AUTH_URL = "http://localhost:8080/api/auth/signup";


class UserService {
    // lay danh sach user
    getListUser() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user) {
        return axios.post(USER_API_AUTH_URL, user);
    }

    getUserById(id) {
        return axios.get(USER_API_BASE_URL + '/' + id);
    }

    updateUser(user, id) {
        return axios.put(USER_API_BASE_URL + '/' + id, user);
    }

    deleteUser(id) {
        return axios.delete(USER_API_BASE_URL + '/' + id);
    }
    checkUsername(username){
        return axios.get(USER_API_BASE_URL + '/check_username/' + username);
    }
    checkEmail(email){
        return axios.get(USER_API_BASE_URL + '/check_email/' + email);
    }
}
export default new UserService();