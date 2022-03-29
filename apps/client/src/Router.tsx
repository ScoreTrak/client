import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./routes";
import RequireAuthLayout from "./layouts/RequireAuthLayout";
import Dashboard from "./routes/dashboard";
import Scoreboard from "./routes/scoreboard";
import Ranks from "./routes/scoreboard/Ranks";
import AuthLayout from "./layouts/AuthLayout";
import {SignIn} from "./routes/auth/SignIn";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route element={<RequireAuthLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Route>
            <Route path="/scoreboard" element={<DefaultLayout />}>
                <Route index element={<Scoreboard />} />
                <Route path="ranks" element={<Ranks />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="sign_in" element={<SignIn />} />
            </Route>
        </Routes>
    )
}