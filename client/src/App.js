import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { routePath } from "./routes/route";
import FindJobs from "./pages/FindJobs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.create} element={<CreatePost />} />
        <Route path={routePath.posts} element={<FindJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
