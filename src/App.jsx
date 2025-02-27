import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import AvailableAndSelected from './components/players/AvailableAndSelected'

function App() {

  return (
    <div>
      <main className='w-10/12 mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <AvailableAndSelected></AvailableAndSelected>
      </main>
    </div>
  )
}

export default App
