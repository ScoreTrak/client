import * as jspb from 'google-protobuf'

import * as scoretrak_config_v1_config_pb from '../../../scoretrak/config/v1/config_pb';
import * as scoretrak_report_v1_report_pb from '../../../scoretrak/report/v1/report_pb';
import * as scoretrak_host_group_v1_host_group_pb from '../../../scoretrak/host_group/v1/host_group_pb';
import * as scoretrak_host_v1_host_pb from '../../../scoretrak/host/v1/host_pb';
import * as scoretrak_team_v1_team_pb from '../../../scoretrak/team/v1/team_pb';
import * as scoretrak_service_v1_service_pb from '../../../scoretrak/service/v1/service_pb';
import * as scoretrak_service_group_v1_service_group_pb from '../../../scoretrak/service_group/v1/service_group_pb';
import * as scoretrak_round_v1_round_pb from '../../../scoretrak/round/v1/round_pb';
import * as scoretrak_property_v1_property_pb from '../../../scoretrak/property/v1/property_pb';
import * as scoretrak_check_v1_check_pb from '../../../scoretrak/check/v1/check_pb';
import * as scoretrak_user_v1_user_pb from '../../../scoretrak/user/v1/user_pb';
import * as scoretrak_policy_v1_policy_pb from '../../../scoretrak/policy/v1/policy_pb';


export class Competition extends jspb.Message {
  getDynamicConfig(): scoretrak_config_v1_config_pb.DynamicConfig | undefined;
  setDynamicConfig(value?: scoretrak_config_v1_config_pb.DynamicConfig): Competition;
  hasDynamicConfig(): boolean;
  clearDynamicConfig(): Competition;

  getReport(): scoretrak_report_v1_report_pb.Report | undefined;
  setReport(value?: scoretrak_report_v1_report_pb.Report): Competition;
  hasReport(): boolean;
  clearReport(): Competition;

  getHostGroupsList(): Array<scoretrak_host_group_v1_host_group_pb.HostGroup>;
  setHostGroupsList(value: Array<scoretrak_host_group_v1_host_group_pb.HostGroup>): Competition;
  clearHostGroupsList(): Competition;
  addHostGroups(value?: scoretrak_host_group_v1_host_group_pb.HostGroup, index?: number): scoretrak_host_group_v1_host_group_pb.HostGroup;

  getHostsList(): Array<scoretrak_host_v1_host_pb.Host>;
  setHostsList(value: Array<scoretrak_host_v1_host_pb.Host>): Competition;
  clearHostsList(): Competition;
  addHosts(value?: scoretrak_host_v1_host_pb.Host, index?: number): scoretrak_host_v1_host_pb.Host;

  getTeamsList(): Array<scoretrak_team_v1_team_pb.Team>;
  setTeamsList(value: Array<scoretrak_team_v1_team_pb.Team>): Competition;
  clearTeamsList(): Competition;
  addTeams(value?: scoretrak_team_v1_team_pb.Team, index?: number): scoretrak_team_v1_team_pb.Team;

  getServicesList(): Array<scoretrak_service_v1_service_pb.Service>;
  setServicesList(value: Array<scoretrak_service_v1_service_pb.Service>): Competition;
  clearServicesList(): Competition;
  addServices(value?: scoretrak_service_v1_service_pb.Service, index?: number): scoretrak_service_v1_service_pb.Service;

  getServiceGroupsList(): Array<scoretrak_service_group_v1_service_group_pb.ServiceGroup>;
  setServiceGroupsList(value: Array<scoretrak_service_group_v1_service_group_pb.ServiceGroup>): Competition;
  clearServiceGroupsList(): Competition;
  addServiceGroups(value?: scoretrak_service_group_v1_service_group_pb.ServiceGroup, index?: number): scoretrak_service_group_v1_service_group_pb.ServiceGroup;

  getRoundsList(): Array<scoretrak_round_v1_round_pb.Round>;
  setRoundsList(value: Array<scoretrak_round_v1_round_pb.Round>): Competition;
  clearRoundsList(): Competition;
  addRounds(value?: scoretrak_round_v1_round_pb.Round, index?: number): scoretrak_round_v1_round_pb.Round;

  getPropertiesList(): Array<scoretrak_property_v1_property_pb.Property>;
  setPropertiesList(value: Array<scoretrak_property_v1_property_pb.Property>): Competition;
  clearPropertiesList(): Competition;
  addProperties(value?: scoretrak_property_v1_property_pb.Property, index?: number): scoretrak_property_v1_property_pb.Property;

  getChecksList(): Array<scoretrak_check_v1_check_pb.Check>;
  setChecksList(value: Array<scoretrak_check_v1_check_pb.Check>): Competition;
  clearChecksList(): Competition;
  addChecks(value?: scoretrak_check_v1_check_pb.Check, index?: number): scoretrak_check_v1_check_pb.Check;

  getUsersList(): Array<scoretrak_user_v1_user_pb.User>;
  setUsersList(value: Array<scoretrak_user_v1_user_pb.User>): Competition;
  clearUsersList(): Competition;
  addUsers(value?: scoretrak_user_v1_user_pb.User, index?: number): scoretrak_user_v1_user_pb.User;

  getPolicy(): scoretrak_policy_v1_policy_pb.Policy | undefined;
  setPolicy(value?: scoretrak_policy_v1_policy_pb.Policy): Competition;
  hasPolicy(): boolean;
  clearPolicy(): Competition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Competition.AsObject;
  static toObject(includeInstance: boolean, msg: Competition): Competition.AsObject;
  static serializeBinaryToWriter(message: Competition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Competition;
  static deserializeBinaryFromReader(message: Competition, reader: jspb.BinaryReader): Competition;
}

export namespace Competition {
  export type AsObject = {
    dynamicConfig?: scoretrak_config_v1_config_pb.DynamicConfig.AsObject,
    report?: scoretrak_report_v1_report_pb.Report.AsObject,
    hostGroupsList: Array<scoretrak_host_group_v1_host_group_pb.HostGroup.AsObject>,
    hostsList: Array<scoretrak_host_v1_host_pb.Host.AsObject>,
    teamsList: Array<scoretrak_team_v1_team_pb.Team.AsObject>,
    servicesList: Array<scoretrak_service_v1_service_pb.Service.AsObject>,
    serviceGroupsList: Array<scoretrak_service_group_v1_service_group_pb.ServiceGroup.AsObject>,
    roundsList: Array<scoretrak_round_v1_round_pb.Round.AsObject>,
    propertiesList: Array<scoretrak_property_v1_property_pb.Property.AsObject>,
    checksList: Array<scoretrak_check_v1_check_pb.Check.AsObject>,
    usersList: Array<scoretrak_user_v1_user_pb.User.AsObject>,
    policy?: scoretrak_policy_v1_policy_pb.Policy.AsObject,
  }
}

export class LoadCompetitionRequest extends jspb.Message {
  getCompetition(): Competition | undefined;
  setCompetition(value?: Competition): LoadCompetitionRequest;
  hasCompetition(): boolean;
  clearCompetition(): LoadCompetitionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoadCompetitionRequest): LoadCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: LoadCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadCompetitionRequest;
  static deserializeBinaryFromReader(message: LoadCompetitionRequest, reader: jspb.BinaryReader): LoadCompetitionRequest;
}

export namespace LoadCompetitionRequest {
  export type AsObject = {
    competition?: Competition.AsObject,
  }
}

export class LoadCompetitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoadCompetitionResponse): LoadCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: LoadCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadCompetitionResponse;
  static deserializeBinaryFromReader(message: LoadCompetitionResponse, reader: jspb.BinaryReader): LoadCompetitionResponse;
}

export namespace LoadCompetitionResponse {
  export type AsObject = {
  }
}

export class FetchCoreCompetitionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchCoreCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchCoreCompetitionRequest): FetchCoreCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: FetchCoreCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchCoreCompetitionRequest;
  static deserializeBinaryFromReader(message: FetchCoreCompetitionRequest, reader: jspb.BinaryReader): FetchCoreCompetitionRequest;
}

export namespace FetchCoreCompetitionRequest {
  export type AsObject = {
  }
}

export class FetchCoreCompetitionResponse extends jspb.Message {
  getCompetition(): Competition | undefined;
  setCompetition(value?: Competition): FetchCoreCompetitionResponse;
  hasCompetition(): boolean;
  clearCompetition(): FetchCoreCompetitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchCoreCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchCoreCompetitionResponse): FetchCoreCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: FetchCoreCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchCoreCompetitionResponse;
  static deserializeBinaryFromReader(message: FetchCoreCompetitionResponse, reader: jspb.BinaryReader): FetchCoreCompetitionResponse;
}

export namespace FetchCoreCompetitionResponse {
  export type AsObject = {
    competition?: Competition.AsObject,
  }
}

export class FetchEntireCompetitionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchEntireCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchEntireCompetitionRequest): FetchEntireCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: FetchEntireCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchEntireCompetitionRequest;
  static deserializeBinaryFromReader(message: FetchEntireCompetitionRequest, reader: jspb.BinaryReader): FetchEntireCompetitionRequest;
}

export namespace FetchEntireCompetitionRequest {
  export type AsObject = {
  }
}

export class FetchEntireCompetitionResponse extends jspb.Message {
  getCompetition(): Competition | undefined;
  setCompetition(value?: Competition): FetchEntireCompetitionResponse;
  hasCompetition(): boolean;
  clearCompetition(): FetchEntireCompetitionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchEntireCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchEntireCompetitionResponse): FetchEntireCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: FetchEntireCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchEntireCompetitionResponse;
  static deserializeBinaryFromReader(message: FetchEntireCompetitionResponse, reader: jspb.BinaryReader): FetchEntireCompetitionResponse;
}

export namespace FetchEntireCompetitionResponse {
  export type AsObject = {
    competition?: Competition.AsObject,
  }
}

export class ResetScoresRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetScoresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetScoresRequest): ResetScoresRequest.AsObject;
  static serializeBinaryToWriter(message: ResetScoresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetScoresRequest;
  static deserializeBinaryFromReader(message: ResetScoresRequest, reader: jspb.BinaryReader): ResetScoresRequest;
}

export namespace ResetScoresRequest {
  export type AsObject = {
  }
}

export class ResetScoresResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetScoresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetScoresResponse): ResetScoresResponse.AsObject;
  static serializeBinaryToWriter(message: ResetScoresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetScoresResponse;
  static deserializeBinaryFromReader(message: ResetScoresResponse, reader: jspb.BinaryReader): ResetScoresResponse;
}

export namespace ResetScoresResponse {
  export type AsObject = {
  }
}

export class DeleteCompetitionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompetitionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompetitionRequest): DeleteCompetitionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCompetitionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompetitionRequest;
  static deserializeBinaryFromReader(message: DeleteCompetitionRequest, reader: jspb.BinaryReader): DeleteCompetitionRequest;
}

export namespace DeleteCompetitionRequest {
  export type AsObject = {
  }
}

export class DeleteCompetitionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCompetitionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCompetitionResponse): DeleteCompetitionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCompetitionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCompetitionResponse;
  static deserializeBinaryFromReader(message: DeleteCompetitionResponse, reader: jspb.BinaryReader): DeleteCompetitionResponse;
}

export namespace DeleteCompetitionResponse {
  export type AsObject = {
  }
}

