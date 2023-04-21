import {TServer, TServerMaster, TServerPoint} from "../models/server-models/server-models";

export const getClientNames = (client: TServer): string[] => {
    const names: string[] = []
    client.masters.map((master: TServerMaster) => {
        master.points.map((point: TServerPoint) => {
            names.push(point.name)
        })
    })
    return names
}