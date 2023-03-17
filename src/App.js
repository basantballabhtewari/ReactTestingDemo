import { useState, useCallback, useMemo } from 'react';
import './App.css';
import CallBackIssueComponent from './components/CallBackIssueComponent';
import HomeComponent from './components/home.component';
import Testcomponents from './components/testcomponents';

function App() {

  const [name, setName] = useState('Basant')
  const [age, setAge] = useState(20);


  const resetData = useCallback(() => {
    setName('Basant');
    setAge(20);
  },[])


const Squired=useMemo(()=>{
  console.log("Squired ....")
  return age*age;
},[age])


  return (
    <div className="App"><h1>Testing Demo App</h1> 
    <h2>Testing1 Demo App</h2> 
      <HomeComponent name={name} age={age}
        changeName={(name) => setName(name)}
        changeage={(age) =>{
          isNaN(age)
          setAge(age)}
          } />

      <Testcomponents name={name} age={age} />
      <CallBackIssueComponent resetValue={resetData} />

      <br></br>
      <h3>Squired Of age is {Squired}</h3>
    </div>
  );
}

export default App;
