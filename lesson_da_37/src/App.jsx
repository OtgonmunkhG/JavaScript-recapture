import { Link, Routes, Route } from "react-router-dom"
import Feature from "./pages/Feature"
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {

  return (
      <div>
          <nav className="bg-gray-100 p-4">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/about" className="mr-4">About</Link>
            <Link to="/contact" className="mr-4" >Contact</Link>
            <Link to="/posts" className="mr-4">Posts</Link>
            {/* <Link to="/posts/:postId" >Post Detail</Link> */}
          </nav>

          <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/feature" element={<Feature />}/>
                <Route path="/team" element={<Team />}/>
              </Route>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/posts" element={<Posts />}/>
              <Route path="/posts/:postId" element={<PostDetail />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
      </div>
  )
}

export default App
