import {FC} from "react";
import {TServer} from "../models/server-models/server-models";
import data from "../jsons/index.json"
import {TIndexController} from "../models/index-controller/index-controller";
export const getForwardStepForServ = (serv: TServer) => {

    serv.masters.map((master) => {
        const clientControllerIP = master.ip
        const indexContr: TIndexController = data
        const nextController = indexContr.controllers.find((controller) => controller.info.IPADDR === clientControllerIP)

    })
    return 0

}