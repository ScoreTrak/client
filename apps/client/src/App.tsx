import {Route, Routes} from "react-router-dom";
import Home from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";
import {SignIn} from "./routes/auth/SignIn";
import GrpcClients from "./components/GrpcClients";
import {PolicyProvider} from "./contexts/PolicyContext";
import {createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {AuthProvider} from "./contexts/AuthContext";
import {ReportProvider} from "./contexts/ReportContext"
import RequireAuthLayout from './layouts/RequireAuthLayout'
import Scoreboard from "./routes/scoreboard";
import Ranks from './routes/scoreboard/Ranks'
import { deepOrange, deepPurple, lightBlue, orange } from "@mui/material/colors";
import { SnackbarProvider } from 'notistack'
import {QueryClient, QueryClientProvider} from "react-query";
import Settings from "./routes/settings";
import HostGroups from "./routes/settings/host-groups";
import SettingsLayout from "./layouts/SettingsLayout";
import Hosts from "./routes/settings/hosts";
import ServiceGroups from "./routes/settings/service-groups";
import Services from "./routes/settings/services";
import Rounds from "./routes/settings/rounds";
import Properties from "./routes/settings/properties";
import Users from "./routes/settings/users";
import Teams from "./routes/settings/teams";

const queryClient = new QueryClient()

function App() {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: orange[500]
            },
            secondary: {
                main: deepOrange[500]
            }
        }
    })

    const lightTheme = createTheme({
        palette: {
            primary: {
                main: lightBlue[500]
            },
            secondary: {
                main: deepPurple[500]
            }
        }
    })
    return (
        <>
            <CssBaseline />
                <GrpcClients>
                    <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <PolicyProvider>
                            <ReportProvider>
                                <ThemeProvider theme={darkTheme}>
                                <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                                <Routes>
                                    <Route path="/" element={<DefaultLayout />}>
                                        <Route index element={<Home />} />
                                    </Route>
                                    <Route path="/scoreboard" element={<DefaultLayout />}>
                                        <Route index element={<Scoreboard />} />
                                        <Route path="ranks" element={<Ranks />} />
                                    </Route>
                                    <Route path="/settings" element={<SettingsLayout />}>
                                        <Route index element={<Settings />} />
                                        <Route path='host-groups'>
                                            <Route index element={<HostGroups />} />
                                        </Route>
                                        <Route path='hosts'>
                                            <Route index element={<Hosts />} />
                                        </Route>
                                        <Route path='service-groups'>
                                            <Route index element={<ServiceGroups />} />
                                        </Route>
                                        <Route path='services'>
                                            <Route index element={<Services />} />
                                        </Route>
                                        <Route path='rounds'>
                                            <Route index element={<Rounds />} />
                                        </Route>
                                        <Route path='properties'>
                                            <Route index element={<Properties />} />
                                        </Route>
                                        <Route path='users'>
                                            <Route index element={<Users />} />
                                        </Route>
                                        <Route path='teams'>
                                            <Route index element={<Teams />} />
                                        </Route>
                                    </Route>
                                    <Route path="/auth" element={<AuthLayout />}>
                                        <Route path="sign_in" element={<SignIn />} />
                                    </Route>
                                </Routes>
                                </SnackbarProvider>
                                </ThemeProvider>
                            </ReportProvider>
                        </PolicyProvider>
                    </AuthProvider>
                    </QueryClientProvider>
                </GrpcClients>
        </>
    )
}

export default App
