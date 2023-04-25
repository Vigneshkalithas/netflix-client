import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Movies from "./Pages/Movies";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import { NotFound } from "./Pages/NotFound";
import { Layout } from "./Pages/Layout";
import Analytics from "./Pages/Analytics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Utils/ProtectedRoute";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} /> */}

        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
