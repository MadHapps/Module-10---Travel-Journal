import './App.css'
import TravelCard from './components/travelCard'
import data from './data'

function App() {

  return (
    <div className="app">
      <header>
        <i className="fa-solid fa-earth-americas fa-xl"></i><h1 className="header-text">my travel journal.</h1>
      </header>
      <main className='travel-card-wrapper'>
        {data.map((data, index) => {
          return <TravelCard key={index} data={data} />
        })}
      </main>
    </div>
  )
}

export default App
