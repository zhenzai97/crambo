import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from '@/views/login/loginPage'   ;
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/login" component={LoginPage}/>
                </div>
            </Router>
        )
    }

}

export default App;
