import { makeAutoObservable, observable, action } from "mobx";
import authService, { loginDto, registerDto } from "../Services/authService";

export interface loginUser {
    userId: number
    email: string
    token: string
}

export interface User {
    id: number,
    username: string,
    birthDate: string,
    capScore: number
}

class AuthStore {
    @observable user: User | undefined;

    @action
    attemptLogin = async (data: loginDto) => {
        localStorage.clear();
        const response = await authService.attemptLogin(data);
        console.log(response);
        
        const user = await authService.getUserById(response.data.userId);
        this.user = user.data;
        localStorage.setItem("token", response.data.token);
        console.log(this.user);
    }

    @action
    registerUser = async (data: registerDto) => {
        localStorage.clear();
        const response = await authService.registerUser(data);
        this.user = response.data;
        console.log(this.user);
    }

    
    @action
    logout = () => {
        localStorage.clear();
        this.user = undefined;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

const authStore = new AuthStore();
export default authStore;