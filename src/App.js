
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import Navbar from '../src/components/Navbar/Navbar'
import Header from '../src/components/Header/Header'


function App() {
  return (
   <>
   <Particles className='particle-onscreen'
   params={{
     particles:{
       number:{
         value:30,
         density:{
           enable: true,
           value_area:900,
         }
       },
       shape:{
         type: "circle",
         stroke: {
           width:6,
           color: "lightgray"
         }
       }
     }
   }}
   
   
   />
   <Navbar/>
   <Header/>
   </>
  );
}

export default App;
