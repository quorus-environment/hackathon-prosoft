import {TServer} from "../server-models/server-models";
import {TClient} from "../client-models/client-models";

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