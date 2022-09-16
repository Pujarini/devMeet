import "./App.css";
import HomeScreen from "./Pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import CreateMeetup from "./Pages/CreateMeetup";
import MeetupByCategory from "./Pages/MeetupByCategory";
import MeetupList from "./Pages/MeetupList";
import AttendMeetup from "./Pages/AttendMeetup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createMeetup" element={<CreateMeetup />}></Route>
          <Route path="/meetups" element={<MeetupList />}></Route>
          <Route path="/meetups/:meetup" element={<MeetupByCategory />}></Route>
          <Route path="/meetups/register" element={<AttendMeetup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
