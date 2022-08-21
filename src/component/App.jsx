import { useMediaQuery } from 'react-responsive';
import '../App.css';
import Areagraph from './Areagraph';
import BarGraph from './BarGraph';

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 645px)` });
  return (
    <div className="App">
     <BarGraph isMobile = {isMobile}/>
     <Areagraph isMobile = {isMobile}/> 
    </div>
  );
}

export default App;
