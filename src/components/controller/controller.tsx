import React, { FC } from "react"
import { Group, Line, Rect, Text } from "react-konva"
import { List } from "../ui/list/list"
import { ListItem } from "../ui/list-item/list-item"

export const CONST_CORDS = {
  LIST_WIDTH: 400,
  BETWEEN_CONTR: 1000,
  HEIGHT_ITEM: 70,
  BETWEEN_LISTS: 650,
  START_CLIENT: { x: 400, y: 400 },
  START_SERVER: { x: 400 }, // y - высчитываем на основе количества клиентов
  START_WAREHOUSE: { x: 2500, y: 1400 },
}

type TWarehouseObject = {
  name: string
  client: { name: string; cl_object: string }
  server: { name: string; cl_object: string }
}

type TContrCoord = {
  ip: string
  coords: { x: number; y: number }
}

type TController = {
  contrCoords: TContrCoord[]
  setCoords: (obj: TContrCoord[]) => void
  warehouseConfig: { ip: string; objects: TWarehouseObject[] }
  serversConfig: string[]
  clientsConfig: string[]
  title: string
  x: number
  y: number
  ip: string
}

export const Controller: FC<TController> = ({
  x,
  y,
  setCoords,
  title,
  warehouseConfig,
  serversConfig,
  clientsConfig,
  contrCoords,
  ip,
}) => {
  return (
    <Group
      onDragMove={(e) => {
        const position = e.target.position()
        const currentCoordIndex = contrCoords.findIndex((el) => el.ip === ip)
        const prev = [...contrCoords]
        prev[currentCoordIndex] = {
          ip,
          coords: { x: position.x, y: position.y },
        }
        setCoords(prev)
      }}
      draggable={true}
      x={x}
      y={y}
    >
      <Rect
        width={3000}
        height={
          (clientsConfig.length + 1 + serversConfig.length) *
          CONST_CORDS.BETWEEN_LISTS
        }
        stroke={"black"}
        strokeWidth={2}
      ></Rect>
      <Group draggy={0} x={2400} width={600}>
        <Rect width={600} height={180} stroke={"black"} strokeWidth={2}></Rect>
        <Text
          y={30}
          x={140}
          stroke={"black"}
          text={title}
          fill={"black"}
          align={"center"}
          fontSize={100}
        />
      </Group>

      {clientsConfig.map((element, index) => {
        return (
          <List
            x={CONST_CORDS.START_CLIENT.x}
            y={CONST_CORDS.START_CLIENT.y + CONST_CORDS.BETWEEN_LISTS * index}
          >
            <ListItem
              text={element}
              width={CONST_CORDS.LIST_WIDTH}
              height={CONST_CORDS.HEIGHT_ITEM}
              y={0}
            />
            {warehouseConfig.objects
              .filter((obj) => obj.client.name == element)
              .map((el, i) => {
                return (
                  <ListItem
                    align={"left"}
                    text={el.client.cl_object}
                    width={CONST_CORDS.LIST_WIDTH}
                    height={CONST_CORDS.HEIGHT_ITEM}
                    y={(i + 1) * CONST_CORDS.HEIGHT_ITEM}
                  />
                )
              })}
          </List>
        )
      })}

      {serversConfig.map((element, index) => {
        return (
          <List
            x={CONST_CORDS.START_SERVER.x}
            y={
              clientsConfig.length * CONST_CORDS.BETWEEN_LISTS +
              CONST_CORDS.BETWEEN_LISTS * index
            }
          >
            <ListItem
              text={element}
              width={CONST_CORDS.LIST_WIDTH}
              height={CONST_CORDS.HEIGHT_ITEM}
              y={0}
            />
            {warehouseConfig.objects
              .filter((obj) => obj.server.name == element)
              .map((el, i) => {
                return (
                  <ListItem
                    align={"left"}
                    text={el.server.cl_object}
                    width={CONST_CORDS.LIST_WIDTH}
                    height={CONST_CORDS.HEIGHT_ITEM}
                    y={(i + 1) * CONST_CORDS.HEIGHT_ITEM}
                  />
                )
              })}
          </List>
        )
      })}

      <List x={CONST_CORDS.START_WAREHOUSE.x} y={CONST_CORDS.START_WAREHOUSE.y}>
        <ListItem
          text={"Warehouse"}
          width={CONST_CORDS.LIST_WIDTH}
          height={CONST_CORDS.HEIGHT_ITEM}
          y={0}
        />
        {warehouseConfig.objects.map((element, i) => {
          return (
            <ListItem
              align={"left"}
              text={element.name}
              width={CONST_CORDS.LIST_WIDTH}
              height={CONST_CORDS.HEIGHT_ITEM}
              y={(i + 1) * CONST_CORDS.HEIGHT_ITEM}
            />
          )
        })}
      </List>

      {/*линии от сервера до ядра*/}
      {warehouseConfig.objects.map((element, index) => {
        const serverName = element.server.name
        const indexServerName = serversConfig.findIndex(
          (name) => name === serverName,
        )
        const serverObjNames = warehouseConfig.objects.filter(
          (element) => element.server.name === serverName,
        )
        const indexServerObj = serverObjNames.findIndex(
          (obj) => obj.server.cl_object === element.server.cl_object,
        )
        console.log(serverObjNames)
        const coordsServer = {
          x: CONST_CORDS.START_SERVER.x,
          y:
            clientsConfig.length * CONST_CORDS.BETWEEN_LISTS +
            CONST_CORDS.BETWEEN_LISTS * indexServerName,
        }
        return (
          <Line
            points={[
              coordsServer.x + CONST_CORDS.LIST_WIDTH,
              coordsServer.y +
                (indexServerObj + 1) * CONST_CORDS.HEIGHT_ITEM +
                CONST_CORDS.HEIGHT_ITEM / 2,
              CONST_CORDS.START_WAREHOUSE.x,
              CONST_CORDS.START_WAREHOUSE.y +
                CONST_CORDS.HEIGHT_ITEM * (index + 1) +
                CONST_CORDS.HEIGHT_ITEM / 2,
            ]}
            stroke={"black"}
            strokeWidth={2}
          />
        )
      })}

      {/*линии от клиента до ядра*/}
      {warehouseConfig.objects.map((element, index) => {
        const clientName = element.client.name
        const indexClientName = clientsConfig.findIndex(
          (name) => name === clientName,
        )
        const clientObjNames = warehouseConfig.objects.filter(
          (element) => element.client.name === clientName,
        )
        const indexClientObj = clientObjNames.findIndex(
          (obj) => obj.client.cl_object === element.client.cl_object,
        )
        const coordsClient = {
          x: CONST_CORDS.START_CLIENT.x,
          y:
            CONST_CORDS.START_CLIENT.y +
            CONST_CORDS.BETWEEN_LISTS * indexClientName,
        }
        return (
          <Line
            points={[
              coordsClient.x + CONST_CORDS.LIST_WIDTH,
              coordsClient.y +
                (indexClientObj + 1) * CONST_CORDS.HEIGHT_ITEM +
                CONST_CORDS.HEIGHT_ITEM / 2,
              CONST_CORDS.START_WAREHOUSE.x,
              CONST_CORDS.START_WAREHOUSE.y +
                CONST_CORDS.HEIGHT_ITEM * (index + 1) +
                CONST_CORDS.HEIGHT_ITEM / 2,
            ]}
            stroke={"black"}
            strokeWidth={2}
          />
        )
      })}
    </Group>
  )
}
