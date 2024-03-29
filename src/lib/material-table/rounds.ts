import { Round } from "@buf/scoretrak_scoretrakapis.grpc_web/scoretrak/round/v1/round_pb";
import { IRound } from "../../types/material_table";

export function roundToIRound(round: Round): IRound {
  return {
    id: round.getId(),
    start: round.getStart()
      ? new Date((round.getStart()?.getSeconds() as number) * 1000)
      : undefined,
    finish: round.getFinish()
      ? new Date((round.getFinish()?.getSeconds() as number) * 1000)
      : undefined,
    err: round.getErr(),
    note: round.getNote(),
  };
}
