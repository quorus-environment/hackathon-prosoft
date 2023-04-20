import "./app.css"
import { Group, Layer, Rect, Text, Line } from "react-konva"
import React, { useState } from "react"
import { Map } from "../components/map/map"
import { ListItem } from "../components/ui/list-item/list-item"
import { List } from "../components/ui/list/list"
import { warehouse_objects, clients, server } from "../testJSONS/config-test"
import { Controller } from "../components/controller/controller"

let CONST_CORDS = {
  LIST_WIDTH: 400,
  BETWEEN_CONTR: 1000,
  HEIGHT_ITEM: 70,
  BETWEEN_LISTS: 650,
  START_CLIENT: { x: 400, y: 400 },
  START_SERVER: { x: 400 }, // y - высчитываем на основе количества клиентов
  START_WAREHOUSE: { x: 2500, y: 1400 },
}

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
          warehouseConfig={warehouse_objects}
          serversConfig={server}
          clientsConfig={clients}
          title={"Aris-2"}
          x={contrCoords?.find((el) => el.ip === "2")?.coords?.x || 0}
          y={contrCoords.find((el) => el.ip === "2")?.coords.y || 0}
        />
        {/*{contrCoords[0].coords.x > contrCoords[1].coords.x && (*/}
        <Line
          points={[
            contrCoords[0].coords.x + 400,
            contrCoords[0].coords.y + 400,
            contrCoords[1].coords.x + 900,
            contrCoords[1].coords.y + 400,
          ]}
          stroke={"red"}
          strokeWidth={10}
        />
        {/*)}*/}
        {/*{fromCoords.x < toCoords.x && (*/}
        {/*  <Line*/}
        {/*    points={[*/}
        {/*      fromCoords.x + 900,*/}
        {/*      fromCoords.y + 400,*/}
        {/*      toCoords.x + 400,*/}
        {/*      toCoords.y + 400,*/}
        {/*    ]}*/}
        {/*    stroke={"red"}*/}
        {/*    strokeWidth={10}*/}
        {/*  />*/}
        {/*)}*/}
      </Layer>
    </Map>
  )
}
