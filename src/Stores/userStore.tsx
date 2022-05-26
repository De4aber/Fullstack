import { makeAutoObservable, observable, action } from "mobx";
import authService, { loginDto, registerDto } from "../Services/authService";
import userService from "../Services/userService";


class UserStore {

    @action
    getUsernameById = async (data: number) => {
        const response = await userService.getUsernameById(data);
        return response.data.username;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

const userStore = new UserStore();
export default userStore;