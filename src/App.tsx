import { ThemeProvider } from '@emotion/react';
import './App.css';
import Login from './pages/Login';
import { CssBaseline, createTheme, } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const defaultTheme = createTheme();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
  ]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
