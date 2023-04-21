import "./app.css"
import { Layer, Line } from "react-konva"
import React, { useEffect, useState } from "react"
import { Map } from "../components/map/map"
import { warehouse_objects, clients, server } from "../testJSONS/config-test"
import {
  CONST_CORDS,
  Controller,
  TWarehouseObject,
} from "../components/controller/controller"
import { controllers } from "../testJSONS/config-connection"
import {
  clientsSecond,
  serverSecond,
  warehouse_objectsSecond,
} from "../testJSONS/test-config-second"
import { Links } from "../components/links/links"

const joins = [
  {
    ip: "10.21.1212.1",
    warehouse: { ...warehouse_objects },
    clients: [...clients],
    server: [...server],
  },
  {
    ip: "30.20.1040",
    warehouse: { ...warehouse_objectsSecond },
    clients: [...clientsSecond],
    server: [...serverSecond],
  },
]

export const App = () => {
  const [contrCoords, setContrCoords] = useState<null | any>(null)

  useEffect(() => {
    const initialContrCoords = joins.map((el, i) => {
      return {
        ip: el.ip,
        coords: {
          x: i * CONST_CORDS.BETWEEN_CONTR,
          y: 0,
        },
      }
    })
    setContrCoords(initialContrCoords)
  }, [])

  return (
    contrCoords && (
      <Map>
        <Layer>
          {contrCoords.map((item: any) => {
            const config = joins.find((v) => v.ip === item.ip)
            return (
              <Controller
                ip={item.ip}
                contrCoords={contrCoords}
                setCoords={setContrCoords}
                warehouseConfig={
                  config?.warehouse as {
                    ip: string
                    objects: TWarehouseObject[]
                  }
                }
                serversConfig={config?.server as string[]}
                clientsConfig={config?.clients as string[]}
                title={"Aris-1"}
                x={item.coords?.x || 0}
                y={item.coords?.y || 0}
              />
            )
          })}
          {/*<Controller*/}
          {/*  ip={"1"}*/}
          {/*  contrCoords={contrCoords}*/}
          {/*  setCoords={setContrCoords}*/}
          {/*  warehouseConfig={warehouse_objects}*/}
          {/*  serversConfig={server}*/}
          {/*  clientsConfig={clients}*/}
          {/*  title={"Aris-1"}*/}
          {/*  x={contrCoords?.find((el: any) => el.ip === "1")?.coords?.x || 0}*/}
          {/*  y={contrCoords?.find((el: any) => el.ip === "1")?.coords.y || 0}*/}
          {/*/>*/}
          {/*<Controller*/}
          {/*  ip={"2"}*/}
          {/*  contrCoords={contrCoords}*/}
          {/*  setCoords={setContrCoords}*/}
          {/*  warehouseConfig={warehouse_objectsSecond}*/}
          {/*  serversConfig={serverSecond}*/}
          {/*  clientsConfig={clientsSecond}*/}
          {/*  title={"Aris-2"}*/}
          {/*  x={contrCoords?.find((el: any) => el.ip === "2")?.coords?.x || 0}*/}
          {/*  y={contrCoords.find((el: any) => el.ip === "2")?.coords.y || 0}*/}
          {/*/>*/}
          <Links
            controllers={controllers}
            joins={joins}
            contrCoords={contrCoords}
          />
        </Layer>
      </Map>
    )
  )
}
