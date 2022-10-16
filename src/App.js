import './App.css';
import { BasicTable } from './components/BasicTable';
import { FilteringTable } from './components/FilteringTable';

function App() {
  return (
    <div className="App">
      {/* <BasicTable/> */}
      <FilteringTable/>
    </div>
  );
}

export default App;
