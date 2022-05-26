import signalR, { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, observable, runInAction, toJS, autorun, action } from "mobx";

export interface Cappsule {
    id: number,
    senderId: number,
    receiverId: number,
    message: string,
    time: string,
    latitude: number,
    longitude: number,
    photo: string,
}


class CappsuleStore {
    @observable test: string | undefined;
    @observable cappsules: Cappsule[] = [{
        id: 1,
        senderId: 1,
        receiverId: 2,
        message: "Hello",
        time: "2020-01-01T00:00:00",
        latitude: 0,
        longitude: 0,
        photo: "",
    }];
    hubConnection: HubConnection | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        console.log("trying to connect");
        this.hubConnection = new HubConnectionBuilder().withUrl("https://localhost:7010/friendRequestHub").withAutomaticReconnect().build();

        this.hubConnection.start()
            .then(result => {
                console.log('Connected!');

                this.hubConnection?.on('load', message => {
                    console.log(message);
                    this.test = message;
                });

                //omdan til username med userStore.getUsernameById
            })
            .catch(e => console.log('Connection failed: ', e));


    }
}

const cappsuleStore = new CappsuleStore();
export default cappsuleStore;
