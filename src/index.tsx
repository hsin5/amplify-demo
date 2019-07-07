import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify, { API, graphqlOperation }  from "aws-amplify"
import config from "./aws-exports"
Amplify.configure(config)


const ListEvents = `query ListEvents {
  listEvents {
    items {
      id
      where
      description
    }
  }
}`;

async function aaa() {
    const allEvents = await API.graphql(graphqlOperation(ListEvents));
    console.log(allEvents)
}

aaa()

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

