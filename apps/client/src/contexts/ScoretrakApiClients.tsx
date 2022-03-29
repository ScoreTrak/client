import {createContext, useContext, useEffect, useState} from "react";
import {AuthServiceClient} from "@scoretrak/scoretrakapis/scoretrak/auth/v1/AuthServiceClientPb";
import {CheckServiceClient} from "@scoretrak/scoretrakapis/scoretrak/check/v1/CheckServiceClientPb";
import {CompetitionServiceClient} from "@scoretrak/scoretrakapis/scoretrak/competition/v1/CompetitionServiceClientPb";
import {
    DynamicConfigServiceClient,
    StaticConfigServiceClient
} from "@scoretrak/scoretrakapis/scoretrak/config/v1/ConfigServiceClientPb";
import {HostServiceClient} from "@scoretrak/scoretrakapis/scoretrak/host/v1/HostServiceClientPb";
import {HostGroupServiceClient} from "@scoretrak/scoretrakapis/scoretrak/host_group/v1/Host_groupServiceClientPb";
import {PolicyServiceClient} from "@scoretrak/scoretrakapis/scoretrak/policy/v1/PolicyServiceClientPb";
import {PropertyServiceClient} from "@scoretrak/scoretrakapis/scoretrak/property/v1/PropertyServiceClientPb";
import {ReportServiceClient} from "@scoretrak/scoretrakapis/scoretrak/report/v1/ReportServiceClientPb";
import {RoundServiceClient} from "@scoretrak/scoretrakapis/scoretrak/round/v1/RoundServiceClientPb";
import {ServiceServiceClient} from "@scoretrak/scoretrakapis/scoretrak/service/v1/ServiceServiceClientPb";
import {ServiceGroupServiceClient} from "@scoretrak/scoretrakapis/scoretrak/service_group/v1/Service_groupServiceClientPb";
import {TeamServiceClient} from "@scoretrak/scoretrakapis/scoretrak/team/v1/TeamServiceClientPb";
import {UserServiceClient} from "@scoretrak/scoretrakapis/scoretrak/user/v1/UserServiceClientPb";
import {useHostname} from "./HostnameContext";


interface ScoretrakApiClientsContextType {
    authServiceClient: AuthServiceClient,
    checkServiceClient: CheckServiceClient,
    competitionServiceClient: CompetitionServiceClient,
    dynamicConfigServiceClient: DynamicConfigServiceClient,
    staticConfigServiceClient: StaticConfigServiceClient,
    hostServiceClient: HostServiceClient,
    hostGroupServiceClient: HostGroupServiceClient,
    policyServiceClient: PolicyServiceClient,
    propertyServiceClient: PropertyServiceClient,
    reportServiceClient: ReportServiceClient,
    roundServiceClient: RoundServiceClient,
    serviceServiceClient: ServiceServiceClient,
    serviceGroupServiceClient: ServiceGroupServiceClient,
    teamServiceClient: TeamServiceClient,
    userServiceClient: UserServiceClient
}

// @ts-ignore
export const ScoretrakApiClientsContext = createContext<ScoretrakApiClientsContextType>()

export function useScoretrakApiClients() {
    return useContext(ScoretrakApiClientsContext)
}


// @ts-ignore
export function ScoretrakApiClientsProvider({ children, credentials = null, options }) {
    const hostname = useHostname()

    const [authServiceClient, setAuthServiceClient] = useState<AuthServiceClient>(new AuthServiceClient(hostname, credentials, options));
    const [checkServiceClient, setCheckServiceClient] = useState<CheckServiceClient>(new CheckServiceClient(hostname, credentials, options));
    const [competitionServiceClient, setCompetitionServiceClient] = useState<CompetitionServiceClient>(new CompetitionServiceClient(hostname, credentials, options));
    const [dynamicConfigServiceClient, setDynamicConfigServiceClient] = useState<DynamicConfigServiceClient>(new DynamicConfigServiceClient(hostname, credentials, options));
    const [staticConfigServiceClient, setStaticConfigServiceClient] = useState<StaticConfigServiceClient>(new StaticConfigServiceClient(hostname, credentials, options));
    const [hostServiceClient, setHostServiceClient] = useState<HostServiceClient>(new HostServiceClient(hostname, credentials, options));
    const [hostGroupServiceClient, setHostGroupServiceClient] = useState<HostGroupServiceClient>(new HostGroupServiceClient(hostname, credentials, options));
    const [policyServiceClient, setPolicyServiceClient] = useState<PolicyServiceClient>(new PolicyServiceClient(hostname, credentials, options));
    const [propertyServiceClient, setPropertyServiceClient] = useState<PropertyServiceClient>(new PropertyServiceClient(hostname, credentials, options));
    const [reportServiceClient, setReportServiceClient] = useState(new ReportServiceClient(hostname, credentials, options));
    const [roundServiceClient, setRoundServiceClient] = useState<RoundServiceClient>(new RoundServiceClient(hostname, credentials, options));
    const [serviceServiceClient, setServiceServiceClient] = useState<ServiceServiceClient>(new ServiceServiceClient(hostname, credentials, options));
    const [serviceGroupServiceClient, setServiceGroupServiceClient] = useState<ServiceGroupServiceClient>(new ServiceGroupServiceClient(hostname, credentials, options));
    const [teamServiceClient, setTeamServiceClient] = useState<TeamServiceClient>(new TeamServiceClient(hostname, credentials, options));
    const [userServiceClient, setUserServiceClient] = useState<UserServiceClient>(new UserServiceClient(hostname, credentials, options));

    useEffect(() => {
        setAuthServiceClient(new AuthServiceClient(hostname, credentials, options))
        setCheckServiceClient(new CheckServiceClient(hostname, credentials, options))
        setCompetitionServiceClient(new CompetitionServiceClient(hostname, credentials, options))
        setDynamicConfigServiceClient(new DynamicConfigServiceClient(hostname, credentials, options))
        setStaticConfigServiceClient(new StaticConfigServiceClient(hostname, credentials, options))
        setHostServiceClient(new HostServiceClient(hostname, credentials, options))
        setHostGroupServiceClient(new HostGroupServiceClient(hostname, credentials, options))
        setPolicyServiceClient(new PolicyServiceClient(hostname, credentials, options))
        setPropertyServiceClient(new PropertyServiceClient(hostname, credentials, options))
        setReportServiceClient(new ReportServiceClient(hostname, credentials, options))
        setRoundServiceClient(new RoundServiceClient(hostname, credentials, options))
        setServiceServiceClient(new ServiceServiceClient(hostname, credentials, options))
        setServiceGroupServiceClient(new ServiceGroupServiceClient(hostname, credentials, options))
        setTeamServiceClient(new TeamServiceClient(hostname, credentials, options))
        setUserServiceClient(new UserServiceClient(hostname, credentials, options))
    }, [hostname])

    return (
        <ScoretrakApiClientsContext.Provider
            value={{
                authServiceClient,
                checkServiceClient,
                competitionServiceClient,
                dynamicConfigServiceClient,
                staticConfigServiceClient,
                hostServiceClient,
                hostGroupServiceClient,
                policyServiceClient,
                propertyServiceClient,
                reportServiceClient,
                roundServiceClient,
                serviceServiceClient,
                serviceGroupServiceClient,
                teamServiceClient,
                userServiceClient
            }}
        >
            {children}
        </ScoretrakApiClientsContext.Provider>
    )

}