import {Report, Service} from "../types/report";

// @ts-ignore
export default function reportTableReducer(report: Report, action) {
    const teamNamesSet = new Set<string>();
    const data: Record<string, Record<string, Service & {Address: string}>> = {}
    const dataKeys = new Set<string>();
    if ("Teams" in report){
        for (const team in report.Teams) {
            if (report.Teams.hasOwnProperty(team)) {
                data[report.Teams[team].Name] = {}
                for (const host in report.Teams[team].Hosts){
                    if (report.Teams[team].Hosts.hasOwnProperty(host)) {
                        if (Object.keys(report.Teams[team].Hosts[host].Services).length !== 0){
                            for (const service in report.Teams[team].Hosts[host].Services) {
                                if (report.Teams[team].Hosts[host].Services.hasOwnProperty(service)) {
                                    const hst = report.Teams[team].Hosts[host]
                                    const sr = hst.Services[service]
                                    let keyName = ""
                                    if (sr.DisplayName){
                                        keyName = sr.DisplayName
                                    } else {
                                        if (hst.HostGroup != null){
                                            keyName = hst.HostGroup.Name + "-" + sr.Name
                                        } else{
                                            keyName = sr.Name
                                        }
                                    }

                                    data[report.Teams[team].Name][keyName] = {...sr, Address: report.Teams[team].Hosts[host].Address,
                                        Pause: report.Teams[team].Pause ||
                                            (hst.HostGroup != null ? hst.HostGroup.Pause : false)
                                            || hst.Pause
                                            || sr.Pause
                                    }



                                    dataKeys.add(keyName)
                                    teamNamesSet.add(report.Teams[team].Name)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const dataKeysArray = Array.from(dataKeys)
    const teamNames = Array.from(teamNamesSet)
    const collator = new Intl.Collator([], {numeric: true});
    dataKeysArray.sort()
    teamNames.sort((a, b) => collator.compare(a, b));

    return {teamNames, dataKeysArray}

}