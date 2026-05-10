import './App.css';
import Lanyard from './components/Lanyard/Lanyard';

function App() {

  return (
    <>
      <h1>Hello I'm Abhishek 👋🏻</h1>
      <div className="lanyard-container">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </>
  )
}

export default App
