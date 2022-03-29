import {useQuery} from "react-query";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import {GetAllRequest, Round} from "@scoretrak/scoretrakapis/scoretrak/round/v1/round_pb";
import grpcWeb from "grpc-web";


export function useRounds() {
    const {roundServiceClient} = useScoretrakApiClients()

    async function fetchRounds() {
        const roundsResponse = await roundServiceClient.getAll(new GetAllRequest(), {})
        return roundsResponse.getRoundsList()
    }

    return useQuery<Round[], grpcWeb.RpcError>('rounds', fetchRounds)
}

// export function useRound(id: string) {
//     const {roundServiceClient} = useScoretrakApiClients()
//
//     async function fetchRound() {
//     }
// }