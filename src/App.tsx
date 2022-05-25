import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SocketTest from './socketTest';
import { HubConnectionBuilder } from '@microsoft/signalr';


function App() {



  useEffect(() => {
    localStorage.clear();
    const hubConnection = new HubConnectionBuilder().withUrl("https://localhost:7010/friendRequestHub").withAutomaticReconnect().build();

    hubConnection.start()
    .then(result => {
        console.log('Connected!');

        hubConnection.on('load', message => {
            console.log(message);
            
        });
    })
    .catch(e => console.log('Connection failed: ', e));
  }, [])


  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
