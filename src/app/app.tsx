import "./app.css"
import data from "../jsons/index.json"
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
import { testFunction } from "../utils/test-function"
import {
  clientsThird,
  serverThird,
  warehouse_objectsThird,
} from "../testJSONS/third-controller/test-config-third"

import {
  clientsFourth,
  serverFourth,
  warehouse_objectsFourth,
} from "../testJSONS/fourth-config"
import { DropDownList } from "../components/propdown-list/dropdown-list-item"
import { Menu } from "../components/menu/menu"

const joins = [
  {
    ip: "10.21.1212.1",
    warehouse: { ...warehouse_objects },
    clients: [...clients],
    server: [...server],
    title: "Aris-1",
  },
  {
    ip: "30.20.1040",
    warehouse: { ...warehouse_objectsSecond },
    clients: [...clientsSecond],
    server: [...serverSecond],
    title: "Aris-2",
  },
  {
    ip: "10.30.10.10",
    warehouse: { ...warehouse_objectsThird },
    clients: [...clientsThird],
    server: [...serverThird],
    title: "Aris-3",
  },
  {
    ip: "10.40.10.10",
    warehouse: { ...warehouse_objectsFourth },
    clients: [...clientsFourth],
    server: [...serverFourth],
    title: "Aris-4",
  },
]

export const App = () => {
  const [contrCoords, setContrCoords] = useState<null | any>(null)
  // const contrS = testFunction()

  useEffect(() => {
    const initialContrCoords = joins.map((el, i) => {
      if (i % 2 === 0) {
        return {
          ip: el.ip,
          coords: {
            x: i * CONST_CORDS.BETWEEN_CONTR,
            y: -CONST_CORDS.BETWEEN_CONTR,
          },
        }
      }

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
      <>
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
                  title={config?.title || ""}
                  x={item.coords?.x || 0}
                  y={item.coords?.y || 0}
                />
              )
            })}
            <Links
              controllers={controllers}
              joins={joins}
              contrCoords={contrCoords}
            />
          </Layer>
        </Map>
        <Menu />
      </>
    )
  )
}
