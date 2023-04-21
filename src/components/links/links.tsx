import React, { FC } from "react"
import { CONST_CORDS } from "../controller/controller"
import { Arrow, Line } from "react-konva"

type TlinkCell = [
  { name: string; cl_object: string },
  { name: string; cl_object: string },
]

type TLink = {
  ip: string // ip, с которым связь
  clientToServer: TlinkCell[]
  serverToClient: TlinkCell[]
}

type TLinks = {
  // controllers: {
  //   ip: string
  //   links: TLink[]
  // }[]
  controllers: any
  joins: any
  contrCoords: { ip: string; coords: { x: number; y: number } }[]
}
export const Links: FC<TLinks> = ({ controllers, contrCoords, joins }) => {
  return (
    <>
      {controllers.map((currentControl: any) => {
        const fromControlObj = contrCoords.find(
          (element) => element.ip === currentControl.ip,
        )
        return currentControl.links.map((element: any, index: number) => {
          return element.clientToServer.map((cl_obj: any) => {
            if (!cl_obj[0] || !cl_obj[1]) return null
            const toControlObj = contrCoords.find((el) => element.ip === el.ip)
            const currentJoin =
              joins[joins.findIndex((el: any) => el.ip === currentControl.ip)]
            const clientIndex = currentJoin.clients.findIndex(
              (name: any) => name === cl_obj[0].name,
            ) // clients - у каждого свой
            const objClient = currentJoin.warehouse.objects.filter(
              (element: any) => element.client.name === cl_obj[0].name,
            )
            const objClientIndex = objClient.findIndex(
              (obj: any) => obj.client.cl_object === cl_obj[0].cl_object,
            ) // индекс объекта клиента
            const secondJoin =
              joins[joins.findIndex((el: any) => el.ip === toControlObj?.ip)]
            const serverIndex = secondJoin.server.findIndex(
              (name: any) => name === cl_obj[1].name,
            )
            const objServer = secondJoin.warehouse.objects.filter(
              (element: any) => element.server.name === cl_obj[1].name,
            )
            const objServerIndex = objServer.findIndex((obj: any) => {
              return obj.server.cl_object === cl_obj[1].cl_object
            })
            const fromCoords = {
              x: CONST_CORDS.START_CLIENT.x + (fromControlObj?.coords.x || 0),
              y:
                (fromControlObj?.coords.y || 0) +
                CONST_CORDS.START_CLIENT.y +
                CONST_CORDS.BETWEEN_LISTS * clientIndex +
                (objClientIndex + 1) * CONST_CORDS.HEIGHT_ITEM +
                CONST_CORDS.HEIGHT_ITEM / 2,
            }
            const toCoords = {
              x: CONST_CORDS.START_CLIENT.x + (toControlObj?.coords.x || 0),
              y:
                (toControlObj?.coords.y || 0) +
                currentJoin.clients.length * CONST_CORDS.BETWEEN_LISTS +
                CONST_CORDS.BETWEEN_LISTS * serverIndex +
                (objServerIndex + 1) * CONST_CORDS.HEIGHT_ITEM +
                CONST_CORDS.HEIGHT_ITEM / 2,
            }
            return (
              <Line
                points={[fromCoords.x, fromCoords.y, toCoords.x, toCoords.y]}
                stroke={"blue"}
                strokeWidth={10}
              />
            )
          })
        })
      })}
      {controllers.map((currentControl: any) => {
        const fromControlObj = contrCoords.find(
          (element) => element.ip === currentControl.ip,
        )
        return currentControl.links.map((element: any, index: number) => {
          return element.serverToClient.map((cl_obj: any) => {
            if (!cl_obj[0] || !cl_obj[1]) return null
            const currentJoin =
              joins[joins.findIndex((el: any) => el.ip === currentControl.ip)]
            const toControlObj = contrCoords.find((el) => element.ip === el.ip)
            const serverIndex = currentJoin.server.findIndex(
              (name: any) => name === cl_obj[0].name,
            ) // clients - у каждого свой
            const objServer = currentJoin.warehouse.objects.filter(
              (element: any) => element.server.name === cl_obj[0].name,
            )
            const objServerIndex = objServer.findIndex(
              (obj: any) => obj.server.cl_object === cl_obj[0].cl_object,
            )
            const secondJoin =
              joins[joins.findIndex((el: any) => el.ip === toControlObj?.ip)]
            const clientIndex = secondJoin.clients.findIndex(
              (name: any) => name === cl_obj[1].name,
            )
            const objClient = secondJoin.warehouse.objects.filter(
              (element: any) => element.client.name === cl_obj[1].name,
            )
            const objClientIndex = objClient.findIndex((obj: any) => {
              return obj.server.cl_object === cl_obj[1].cl_object
            })
            const fromCoords = {
              x: CONST_CORDS.START_CLIENT.x + (fromControlObj?.coords.x || 0),
              y:
                (fromControlObj?.coords.y || 0) +
                secondJoin.clients.length * CONST_CORDS.BETWEEN_LISTS +
                CONST_CORDS.BETWEEN_LISTS * serverIndex +
                (objServerIndex + 1) * CONST_CORDS.HEIGHT_ITEM +
                CONST_CORDS.HEIGHT_ITEM / 2,
            }
            const toCoords = {
              x: CONST_CORDS.START_CLIENT.x + (toControlObj?.coords.x || 0),
              y:
                (toControlObj?.coords.y || 0) +
                CONST_CORDS.START_CLIENT.y +
                CONST_CORDS.BETWEEN_LISTS * clientIndex +
                (objClientIndex + 1) * CONST_CORDS.HEIGHT_ITEM +
                CONST_CORDS.HEIGHT_ITEM / 2,
            }
            return (
              <Line
                points={[fromCoords.x, fromCoords.y, toCoords.x, toCoords.y]}
                stroke={"blue"}
                strokeWidth={10}
              />
            )
          })
        })
      })}
    </>
  )
}
