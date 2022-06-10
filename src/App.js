import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BookmarkPage from "./pages/BookmarkPage";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import TVseriesPage from "./pages/TVseriesPage";


function App() {
  
  return (
    <div className="App bg-[#10141e] min-h-screen lg:gap-x-2 lg:grid lg:grid-cols-12">
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvseries" element={<TVseriesPage />} />
        <Route path="/bookmarked" element={<BookmarkPage />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
