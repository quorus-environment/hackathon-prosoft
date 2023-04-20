import "./app.css"
import { Layer, Line } from "react-konva"
import React, { useState } from "react"
import { Map } from "../components/map/map"
import { warehouse_objects, clients, server } from "../testJSONS/config-test"
import { CONST_CORDS, Controller } from "../components/controller/controller"
import { controllers } from "../testJSONS/config-connection"
import {
  clientsSecond,
  serverSecond,
  warehouse_objectsSecond,
} from "../testJSONS/test-config-second"

const joins = [
  {
    ip: "1",
    warehouse: { ...warehouse_objects },
    clients: [...clients],
    server: [...server],
  },
  {
    ip: "2",
    warehouse: { ...warehouse_objectsSecond },
    clients: [...clientsSecond],
    server: [...serverSecond],
  },
]

export const App = () => {
  const [contrCoords, setContrCoords] = useState([
    {
      ip: "1",
      coords: { x: 0, y: 0 },
    },
    {
      ip: "2",
      coords: { x: 2000, y: 2000 },
    },
  ])
  return (
    <Map>
      <Layer>
        <Controller
          ip={"1"}
          contrCoords={contrCoords}
          setCoords={setContrCoords}
          warehouseConfig={warehouse_objects}
          serversConfig={server}
          clientsConfig={clients}
          title={"Aris-1"}
          x={contrCoords?.find((el) => el.ip === "1")?.coords?.x || 0}
          y={contrCoords.find((el) => el.ip === "1")?.coords.y || 0}
        />
        <Controller
          ip={"2"}
          contrCoords={contrCoords}
          setCoords={setContrCoords}
          warehouseConfig={warehouse_objectsSecond}
          serversConfig={serverSecond}
          clientsConfig={clientsSecond}
          title={"Aris-2"}
          x={contrCoords?.find((el) => el.ip === "2")?.coords?.x || 0}
          y={contrCoords.find((el) => el.ip === "2")?.coords.y || 0}
        />
        {controllers.map((currentControl) => {
          const fromControlObj = contrCoords.find(
            (element) => element.ip === currentControl.ip,
          )
          return currentControl.links.map((element, index) => {
            return element.clientToServer.map((cl_obj) => {
              if (!cl_obj[0] || !cl_obj[1]) return null
              const toControlObj = contrCoords.find(
                (el) => element.ip === el.ip,
              )
              const currentJoin =
                joins[joins.findIndex((el) => el.ip === currentControl.ip)]
              const clientIndex = currentJoin.clients.findIndex(
                (name) => name === cl_obj[0].name,
              ) // clients - у каждого свой
              const objClient = currentJoin.warehouse.objects.filter(
                (element) => element.client.name === cl_obj[0].name,
              )
              const objClientIndex = objClient.findIndex(
                (obj) => obj.client.cl_object === cl_obj[0].cl_object,
              ) // индекс объекта клиента
              const secondJoin =
                joins[joins.findIndex((el) => el.ip === toControlObj?.ip)]
              const serverIndex = secondJoin.server.findIndex(
                (name) => name === cl_obj[1].name,
              )
              console.log(serverIndex, "1232131321")
              const objServer = secondJoin.warehouse.objects.filter(
                (element) => element.server.name === cl_obj[1].name,
              )
              const objServerIndex = objServer.findIndex((obj) => {
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
        {controllers.map((currentControl) => {
          const fromControlObj = contrCoords.find(
            (element) => element.ip === currentControl.ip,
          )
          return currentControl.links.map((element, index) => {
            return element.serverToClient.map((cl_obj) => {
              if (!cl_obj[0] || !cl_obj[1]) return null
              const currentJoin =
                joins[joins.findIndex((el) => el.ip === currentControl.ip)]
              const toControlObj = contrCoords.find(
                (el) => element.ip === el.ip,
              )
              const serverIndex = currentJoin.server.findIndex(
                (name) => name === cl_obj[0].name,
              ) // clients - у каждого свой
              const objServer = currentJoin.warehouse.objects.filter(
                (element) => element.server.name === cl_obj[0].name,
              )
              const objServerIndex = objServer.findIndex(
                (obj) => obj.server.cl_object === cl_obj[0].cl_object,
              )
              const secondJoin =
                joins[joins.findIndex((el) => el.ip === toControlObj?.ip)]
              const clientIndex = secondJoin.clients.findIndex(
                (name) => name === cl_obj[1].name,
              )
              const objClient = secondJoin.warehouse.objects.filter(
                (element) => element.client.name === cl_obj[1].name,
              )
              const objClientIndex = objClient.findIndex((obj) => {
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
      </Layer>
    </Map>
  )
}
