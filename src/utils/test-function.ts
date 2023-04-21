import dataJSON from "../jsons/index.json"
// import dataJSON from "../jsons/test.json"
import { TIndexController } from "../models/index-controller/index-controller"

/**
 *
 * Выходные данные
 * ```
 * export const controllers = [
 *   {
 *     ip: "1", // ip контроллера
 *     links: [
 *       {
 *         ip: "2", // ip, с которым связь
 *         clientToServer: [
 *           // первый - рассматриваемый котроллер, второй - следующий или предыдущий
 *           [
 *             { name: "Client 104-01", cl_object: "777" }, // массив кортежей двух элементов
 *             { name: "Server 104-01", cl_object: "777" },
 *           ],
 *         ],
 *         serverToClient: [
 *           [
 *             { name: "Server 104-02", cl_object: "333" },
 *             { name: "Client 104-01", cl_object: "777" },
 *           ],
 *         ],
 *       },
 *     ],
 *   },
 * ]
 * ```
 */
export const testFunction = () => {
  let controllers: any[] = []
  const data: TIndexController = dataJSON
  data.controllers.forEach((controller) => {
    // перебираем каждый контроллер
    const controllerServers = controller.serv.masters
    const controllerClients = controller.req.slaves
    const links: any[] = []

    controllerServers?.forEach((server) => {
      // перебираем каждый сервер
      const nextController = data.controllers.find((controller) => controller.info.IPADDR === server.ip)
      // нашли связанный с контроллером клиент
      const nextControllerClient = nextController?.req.slaves.find((slave) => slave.ip === controller.info.IPADDR)
      const serverToClient = server.points.map((point) => {
        const serverObj = { name: server.name, cl_object: point.address } // уточнить что кидать в cl_object
        const clientPoint = nextControllerClient?.points.find((clientPoint) => clientPoint.address === point.address)
        const clientObj = { name: point.client, cl_object: clientPoint?.address } // уточнить что кидать в cl_object
        return [serverObj, clientObj]
      })

      const prevControllerServers = nextController?.serv.masters
      const clientToPrevServerList =
        prevControllerServers?.map((master) =>
          controllerClients.find((client) => client.ip === master.ip))

      const clientToPrevServer = clientToPrevServerList?.find(client => client)
      const clientToServer = clientToPrevServer ?
        clientToPrevServer.points.map((point) => {
          const clientObj = { name: clientToPrevServer.name, cl_object: point.address } // уточнить что кидать в cl_object
          const prevControllerServer = nextController?.serv.masters.find((server) => server.ip === controller.info.IPADDR)
          const serverPoint = prevControllerServer?.points.find((clientPoint) => clientPoint.address === point.address)
          const serverObj = { name: serverPoint?.client, cl_object: serverPoint?.address } // уточнить что кидать в cl_object
          return [clientObj, serverObj]
        })
        : null

      links.push({
        ip: nextController?.info.IPADDR,
        clientToServer: clientToServer,
        serverToClient: serverToClient,
      })
    })


    controllerClients?.forEach((client) => {


      const prevController = data.controllers.find((controller) => controller.info.IPADDR === client.ip)
      const flag = links.find((link) => link.ip === prevController?.info.IPADDR)
      if (flag) return
      const prevControllerServer = prevController?.serv.masters.find((master) => master.ip === controller.info.IPADDR)
      const clientToServer = client.points.map((point) => {
        const clientObj = {name: client.name, cl_object: point.address}
        const serverPoint = prevControllerServer?.points.find((serverPoint) => serverPoint.address === point.address)
        const serverObj = {name: prevControllerServer?.name, cl_object: serverPoint?.address}
        return [clientObj, serverObj]
      })

      const nextControllerClients = prevController?.req.slaves
      const serverToNextClientList = nextControllerClients?.map((client) => controllerServers.find((server) => server.ip === client.ip))

      const serverToNextClient = serverToNextClientList?.find(server => server)
      const serverToClient = serverToNextClient ?
        serverToNextClient.points.map((point) => {
          const serverObj = {name: point.client, cl_object: point.address}
          const nextControllerClient = prevController?.req.slaves.find((client) => client.ip === controller.info.IPADDR)
          const clientPoint = nextControllerClient?.points.find((serverPoint) => serverPoint.address === point.address)
          const clientObj = { name: clientPoint?.name, cl_object: clientPoint?.address }
          return [serverObj, clientObj]
        })
        : null

      links.push({
        ip: prevController?.info.IPADDR,
        clientToServer: clientToServer,
        serverToClient: serverToClient,
      })
    })

    controllers.push({
      ip: controller.info.IPADDR,
      links: links,
    })
  })
  return controllers
}
