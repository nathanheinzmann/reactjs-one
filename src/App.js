import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import api from './services/api.js';

import './App.css';
// import backgroundImage from './assets/background.jpg';

function App() {
    const [names, setNames] = useState([]);
    useEffect(()=>{
        api.get('projects').then(response => {
            setNames(response.data);
        });
    },[]);
    async function inserirNome() {
        //names.push(`Nome inserido ${Date.now()}`);
        // setNames([...names, `Nome inserido ${Date.now()}`]);
        // console.log('Button Works', names);
        const response = await api.post('projects', {
            title: `Nome inserido ${Date.now()}`,
            owner: "Nathan Heinzmann"
        });

        const name = response.data;
        setNames([...names, name]);
    }

    return (
        <>
            <Header title="Names"/>
            {/* <img width={300} src={backgroundImage}/> */}
            <button type="button" onClick={inserirNome}>Inserir Nome!</button>
            <ul>
                {names.map(name => <li key={name.id}>{name.title}</li> )}
            </ul>
        </>
    );
}

export default App;