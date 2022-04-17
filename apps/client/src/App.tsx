import './App.css';
import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider, adaptV4Theme } from "@mui/material/styles";
import { deepOrange, deepPurple, green, lightBlue, orange, purple } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import {gRPCClients} from "./grpc/gRPCClients";
import Dashboard from "./components/Dashboard/Dashboard";
import {SnackbarProvider} from "notistack";



declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


function App() {
  useEffect(() => {
    document.title = "ScoreTrak"
  }, []);
  if (localStorage.getItem("theme") !== "light"){
    localStorage.setItem("theme", "dark")
  }
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.getItem("theme") === "dark");
  const palletType = isDarkTheme ? "dark" : "light";
  const mainPrimaryColor = isDarkTheme ? orange[500] : lightBlue[500];
  const mainSecondaryColor = isDarkTheme ? deepOrange[900] : deepPurple[500];
  const darkTheme = createTheme({
    palette: {
      mode: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <SnackbarProvider maxSnack={3} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }} dense preventDuplicate>
          <CssBaseline />
            <Router>
              <Dashboard theme={{isDarkTheme, setIsDarkTheme}}  gRPCClients={gRPCClients} />
            </Router>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
