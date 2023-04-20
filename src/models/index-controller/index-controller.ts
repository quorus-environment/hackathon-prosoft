import {TClient, TClientSlave} from "../client-models/client-models";
import {TServer} from "../server-models/server-models";

export type TIndexController = {
    controllers: Controller[]
}

type Controller = {
    info: {
        name: string
        IPADDR: string
    }
    req: TClient
    serv: TServer
    warehouse: any
}