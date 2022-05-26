import http from "../http-common";
import { loginUser, User } from "../Stores/authStore";

export interface loginDto {
    username: string;
    password: string;
}

export interface registerDto{
    id: string;
    email: string;
    password: string;
    userType: number;
}

class AuthService {
    async getUserById(id: number){
        return http.get<User>(`/User/${id}`);
    }

    async registerUser(data: registerDto) {
        return http.post<User>("/Auth/RegisterUser", data);
    }
    
    async attemptLogin(data: loginDto) {
        return http.post<loginUser>("/Auth/Login", data);
    }

}
export default new AuthService();