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
import { Links } from "../components/links/links"

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
        <Links
          controllers={controllers}
          joins={joins}
          contrCoords={contrCoords}
        />
      </Layer>
    </Map>
  )
}
