import { useState } from 'react';
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import AvailableAndSelected from './components/players/AvailableAndSelected'

function App() {

  const [balanceCoin, setBalanceCoin] = useState(0);

  const claimFreeCredit = () =>{
    setBalanceCoin(balanceCoin + 200000000)
  }

  return (
    <div>
      <main className='w-10/12 mx-auto'>
        <Header balanceCoin ={balanceCoin}></Header>
        <Banner balanceCoin ={balanceCoin} claimFreeCredit={claimFreeCredit}></Banner>
        <AvailableAndSelected balanceCoin ={balanceCoin} setBalanceCoin={setBalanceCoin}></AvailableAndSelected>
      </main>
    </div>
  )
}

export default App
