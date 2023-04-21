import {TServer} from "../models/server-models/server-models";
import data from "../jsons/index.json"
import {TIndexController} from "../models/index-controller/index-controller";
import {TClientSlave} from "../models/client-models/client-models";

export const getForwardSlaveForServ = (serv: TServer) => {
    let result: TClientSlave | undefined
    serv.masters.map((master) => {
        const clientControllerIP = master.ip
        const indexContr: TIndexController = data
        const homeController = indexContr.controllers.find( (controller) => controller.info.IPADDR === master.homeIP)
        const nextController = indexContr.controllers.find((controller) => controller.info.IPADDR === clientControllerIP)
        result = nextController?.req.slaves.find(slave => slave.ip === homeController?.info.IPADDR)
    })
    return result
}