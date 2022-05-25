import signalR, { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, observable, runInAction, toJS, autorun, action } from "mobx";


export default class TestStore {
    @observable test: string | undefined;
    hubConnection: HubConnection | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = () => {
        console.log("trying to connect");
        this.hubConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:7010/friendRequestHub")
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.start().catch(error =>
            console.log('Error establishing the connection', error));

        this.hubConnection.on('test', (test: string) => {
            runInAction(() => {
                console.log(test);
                this.test = test;
            });
        });


    }

    sendTest = () => {
        console.log("sending test");
    }
        
}
