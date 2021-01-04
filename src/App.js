import React from 'react'
import './App.css';
import Profile from './profile/Profile'



function App() {



  const al=(FullN) => alert(FullN)
  return (
    <div className="App">
    
      <Profile FullName={'Hichem Hanafi'} Bio='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magni atque aliquam explicabo voluptates at expedita amet 
    voluptatum doloribus, ducimus iusto id modi necessitatibus 
    excepturi ea veritatis illo asperiores facere aspernatur?' Profession='Devlopper Js' x={al} />
    
    </div>
  );
}

export default App;
