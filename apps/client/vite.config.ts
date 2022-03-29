import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'ST_',
  optimizeDeps: {
    include: [
        "@scoretrak/scoretrakapis/scoretrak/auth/v1/auth_pb",
        "@scoretrak/scoretrakapis/scoretrak/check/v1/check_pb",
        "@scoretrak/scoretrakapis/scoretrak/competition/v1/competition_pb",
        "@scoretrak/scoretrakapis/scoretrak/config/v1/config_pb",
        "@scoretrak/scoretrakapis/scoretrak/host/v1/host_pb",
        "@scoretrak/scoretrakapis/scoretrak/host_group/v1/host_group_pb",
        "@scoretrak/scoretrakapis/scoretrak/policy/v1/policy_pb",
        "@scoretrak/scoretrakapis/scoretrak/property/v1/property_pb",
        "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb",
        "@scoretrak/scoretrakapis/scoretrak/report/v1/report_pb",
        "@scoretrak/scoretrakapis/scoretrak/round/v1/round_pb",
        "@scoretrak/scoretrakapis/scoretrak/service/v1/service_pb",
        "@scoretrak/scoretrakapis/scoretrak/service_group/v1/service_group_pb",
        "@scoretrak/scoretrakapis/scoretrak/team/v1/team_pb",
        "@scoretrak/scoretrakapis/scoretrak/user/v1/user_pb",
        "@scoretrak/scoretrakapis/scoretrak/auth/v1/AuthServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/check/v1/CheckServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/competition/v1/CompetitionServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/config/v1/ConfigServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/host/v1/HostServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/host_group/v1/Host_groupServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/policy/v1/PolicyServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/property/v1/PropertyServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/report/v1/ReportServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/round/v1/RoundServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/service/v1/ServiceServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/service_group/v1/Service_groupServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/team/v1/TeamServiceClientPb",
        "@scoretrak/scoretrakapis/scoretrak/user/v1/UserServiceClientPb",
        // "@scoretrak/scoretrakapis/scoretrak/auth/v1/auth_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/check/v1/check_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/competition/v1/competition_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/config/v1/config_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/hosts/v1/host_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/host_group/v1/host_group_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/policy/v1/policy_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/property/v1/property_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/report/v1/report_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/round/v1/round_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/service/v1/service_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/service_group/v1/service_group_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/team/v1/team_grpc_web_pb",
        // "@scoretrak/scoretrakapis/scoretrak/user/v1/user_grpc_web_pb"
    ]
  },
  build: {
    commonjsOptions: {
      include: [/scoretrak-scoretrakapis/, /node_modules/]
    }
  }
})
