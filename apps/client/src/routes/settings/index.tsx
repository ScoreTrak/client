import {useTeams} from "../../hooks/useTeams";
import {useServices} from "../../hooks/useServices";
import {useHosts} from "../../hooks/useHosts";


export default function Settings() {
    const { data: teams } = useTeams()
    const { data: services } = useServices()
    const { data: hosts } = useHosts()
    return (
        <>
            <h1>Settings</h1>
            <p>Services {services?.length}</p>
            <p>Hosts {hosts?.length}</p>
            <p>Teams {teams?.length}</p>

        </>
    )
}