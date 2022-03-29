import {useMutation, useQuery, useQueryClient} from "react-query";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import {
    DeleteRequest,
    GetAllRequest,
    StoreRequest,
    Team,
    UpdateRequest
} from "@scoretrak/scoretrakapis/scoretrak/team/v1/team_pb";
import grpcWeb from "grpc-web";


export function useTeams() {
    const {teamServiceClient} = useScoretrakApiClients()

    async function fetchTeams() {
        const teamsResponse = await teamServiceClient.getAll(new GetAllRequest(), {})
        return teamsResponse.getTeamsList()
    }

    return useQuery<Team[], grpcWeb.RpcError>('teams', fetchTeams)
}

// export function useTeamMutations() {
//     const addTeam = useAddTeam()
//     const updateTeam = useUpdateTeam()
//     const deleteTeam = useDeleteTeam()
//
//     return {addTeam, updateTeam, deleteTeam}
// }

export function useAddTeam() {
    const queryClient = useQueryClient()
    const {teamServiceClient} = useScoretrakApiClients()

    const addTeam = async (addTeamRequest: StoreRequest) => {
        const storeRequest = await teamServiceClient.store(addTeamRequest, {})
        return storeRequest
    }

    return useMutation(addTeam,
        {
            onSuccess: () => {
                return queryClient.invalidateQueries('teams')
            }
        })
}

export function useUpdateTeam() {
    const queryClient = useQueryClient()
    const {teamServiceClient} = useScoretrakApiClients()

    const updateTeam = async (updateTeamRequest: UpdateRequest) => {
        const updateResponse = await teamServiceClient.update(updateTeamRequest, {})
        return updateResponse
    }

    return useMutation(updateTeam,
        {
            onSuccess: () => {
                return queryClient.invalidateQueries('teams')
            }
        })
}

export function useDeleteTeam() {
    const queryClient = useQueryClient()
    const {teamServiceClient} = useScoretrakApiClients()

    const deleteTeam = async (deleteTeamRequest: DeleteRequest) => {
        const deleteResponse = await teamServiceClient.delete(deleteTeamRequest, {})
        return deleteResponse
    }

    return useMutation(deleteTeam,
        {
            onSuccess: () => {
                return queryClient.invalidateQueries('teams')
            }
        })
}