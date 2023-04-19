import {TClient, TClientSlave, TSlavePoint} from "../models/client-models/client-models";

export const getClientNames = (client: TClient): string[] => {
    const names: string[] = []
    client.slaves.map((slave: TClientSlave) => {
        slave.points.map((point: TSlavePoint) => {
            names.push(point.name)
        })
    })
    return names
}