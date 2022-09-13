import "./App.css";
import HomeScreen from "./Pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import CreateMeetup from "./Pages/CreateMeetup";
import MeetupByCategory from "./Pages/MeetupByCategory";
import MeetupList from "./Pages/MeetupList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createMeetup" element={<CreateMeetup />}></Route>
          <Route path="/meetups" element={<MeetupList />}></Route>
          <Route
            path="/category/:category"
            element={<MeetupByCategory />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
