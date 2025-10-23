import "./styles/App.css";
import "@radix-ui/themes/styles.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDoubt from "./pages/PostDoubt";
import Dashboard from "./pages/Dashboard";
import MyDoubts from "./pages/MyDoubts";
import NotFound from "./pages/NotFound";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import SolutionPage from "./pages/SolutionPage";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllDoubts from "./pages/AllDoubts";
import PostButton from "./components/PostButton";
import PublicRoute from "./components/PublicRoute";
import Team from "./components/Landing/Team";
import Points from "./pages/Points";
import SearchPage from "./pages/SearchPage";
import { useEffect, useState ,useRef } from "react";
import { useDarkMode } from "./components/DarkMode/DarkModeProvider";
import EditDoubt from "./pages/EditDoubt";


function App() {
     const { currentTheme} = useDarkMode();  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/team"
          element={
            <PublicRoute>
              <Team />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/postdoubt"
          element={
            <ProtectedRoute>
              <PostDoubt />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/alldoubts"
          element={
            <ProtectedRoute>
              <AllDoubts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/mydoubts"
          element={
            <ProtectedRoute>
              <MyDoubts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/doubt/:doubtId"
          element={
            <ProtectedRoute>
              <SolutionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/Search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/points"
          element={
            <ProtectedRoute>
              <Points />
            </ProtectedRoute>
          }
        />
        <Route
         path="/dashboard/doubt/:doubtId/edit" 
         element={
          <ProtectedRoute>
            <EditDoubt/>
          </ProtectedRoute>
         }
         />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        key={currentTheme}
        theme={currentTheme}
      />
    </>
  );
}

export default App;
