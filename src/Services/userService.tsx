import http from "../http-common";
import { loginUser, User } from "../Stores/authStore";

class UserService {
    async getUsernameById(data: number) {
        return http.get<User>(`/User/${data}`);
    }
}
export default new UserService();