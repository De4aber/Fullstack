import signalR, { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, observable, runInAction, toJS, autorun, action } from "mobx";
import userStore from "./userStore";
import authStore from "./authStore";

export interface Cappsule {
    capsuleId: number,
    senderUsername: string,
    message?: string,
    time?: string,
    latitude?: number,
    longitude?: number,
    photo?: string,
}


class CappsuleStore {
    @observable test: string | undefined;
    @observable cappsules: Cappsule[] = [];
    hubConnection: HubConnection | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        console.log("trying to connect");
        this.hubConnection = new HubConnectionBuilder().withUrl("https://185.51.76.204:8091/friendRequestHub"+ '?userId=' + authStore.user?.id).withAutomaticReconnect().build();

        this.hubConnection.start()
            .then(result => {
                console.log('Connected!');

                this.hubConnection?.on('load', message => {
                    console.log(message);
                    this.test = message;
                    this.cappsules = message;
                    console.log("saved capss = " + this.cappsules[0].message);
                });


                //omdan til username med userStore.getUsernameById
            })
            .catch(e => console.log('Connection failed: ', e));

    }
}

const cappsuleStore = new CappsuleStore();
export default cappsuleStore;
