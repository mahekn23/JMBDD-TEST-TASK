import { Routes, Route, Navigate } from "react-router-dom"
import Calendar from './page/calendar'
import moment from 'moment';


function App() {

  let d = new Date();
  let month = parseInt(d.getMonth()) + 1;
  let year = d.getFullYear();

  return (
    <>
      <Routes>
        {/* <Route path="/fetch" element={<Calendar />} /> */}
        <Route path="/" element={<Calendar />} />
        <Route path="/create" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
