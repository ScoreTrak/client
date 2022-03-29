import {Property, Status} from "@scoretrak/scoretrakapis/scoretrak/property/v1/property_pb";
import {IProperty, PropertyStatus} from "../../types/material_table";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";


function statusToPropertyStatus (status : Status): PropertyStatus | undefined {
    if (status === Status.STATUS_VIEW) return PropertyStatus.View
    if (status === Status.STATUS_EDIT) return PropertyStatus.Edit
    if (status === Status.STATUS_HIDE) return PropertyStatus.Hide
    return undefined
}

function propertyStatusToStatus (status: PropertyStatus | undefined): Status {
    if (status === PropertyStatus.View) return Status.STATUS_VIEW
    if (status === PropertyStatus.Hide) return Status.STATUS_HIDE
    if (status === PropertyStatus.Edit) return Status.STATUS_EDIT
    return Status.STATUS_UNSPECIFIED
}

export function propertyToIProperty(property: Property): IProperty {
    return {
        key: property.getKey(),
        value: property.getValue()?.getValue(),
        serviceId: property.getServiceId()?.getValue(),
        status: statusToPropertyStatus(property.getStatus())
    }
}

export function IPropertyToProperty(property: IProperty): Property{
    const u = new Property()
    if (property.serviceId && property.serviceId !== "") u.setServiceId((new UUID().setValue(property.serviceId)))
    u.setKey(property.key)
    if (property.value && property.value !== "") u.setValue((new UUID().setValue(property.value)))
    u.setStatus(propertyStatusToStatus(property.status))
    return u
}