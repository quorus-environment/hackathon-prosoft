import dataJSON from "../jsons/index.json"
import { TIndexController } from "../models/index-controller/index-controller"

export const makeConfig = (ip: string) => {
  const data: TIndexController = dataJSON
  const controller = data.controllers.find(
    (controller) => controller.info.IPADDR === ip,
  )
  const warehouse = controller?.warehouse
  const servers = controller?.serv.masters.map((master) => master.points)

  const clients = controller?.req.slaves
  const objects = warehouse?.points.map((point) => {
    const name = point.name
    // const
  })
}
