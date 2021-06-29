import React, { Component } from 'react';
import Navigation from './main-page/nav-bar';
import Login from './login';

class App extends Component{
    render() {
        return(
            <div>
    <Navigation />
    <Login />
    </div>
        );
    }
}
export default App;