import './App.css'
import { Calculator } from './components/Calculator'
import { History } from './components/History'

function App() {

  return (
    <main className='py-28 px-4 justify-center flex flex-col sm:flex-row items-center sm:items-stretch gap-4'>
      <Calculator/>
      <History/>
    </main>
  )
}

export default App
