import {Outlet} from "react-router-dom";

// @ts-ignore
export default function AuthenticationLayout() {
    return (
        <>
            <section>
                <h1>Scoretrak</h1>
                <Outlet />
            </section>
        </>
    )

}
