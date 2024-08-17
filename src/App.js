import React from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <h2>Welcome to My App</h2>
                <Button label="Click Me" type="primary" />
                <Button label="Delete" type="danger" />
            </main>
            <Footer />
        </div>
    );
};

export default App;
