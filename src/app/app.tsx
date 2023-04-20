import './app.css'
import {Group, Layer, Rect, Text, Line} from "react-konva";
import React from "react";
import {Map} from "../components/map/map";
import {ListItem} from "../components/ui/list-item/list-item";
import {List} from "../components/ui/list/list";
import {warehouse_objects, clients, server} from "../testJSONS/config-test";


let CONST_CORDS = {
    LIST_WIDTH: 400,
    BETWEEN_CONTR: 1000,
    HEIGHT_ITEM: 70,
    BETWEEN_LISTS: 500,
    START_CLIENT: {x: 400, y: 400},
    START_SERVER: {x: 400, y: 2000}
}

const joins = {
    warehouse: ["DI-250", "DI-251", "DI-252", "DI-253"],
    client: ["280"]
}

export const App = () => {
    const [toCoords, setToCoords] = React.useState({x: 0, y: 0})
    const [fromCoords, setFromCoords] = React.useState({x: 0, y: 0})
    let wr_coord_y = 0
    let line_coord_y = 0

    return (
        <Map>
            <Layer>
                <Group onDragMove={e => {
                    const position = e.target.position();
                    setFromCoords({x: position.x, y: position.y})
                }} draggable={true} x={fromCoords.x} y={fromCoords.y}>
                    <Rect width={3000} height={3000} stroke={'black'} strokeWidth={2}>
                    </Rect>
                    <Group draggy={0}
                           x={2400}
                           width={600}
                    >
                        <Rect width={600} height={180} stroke={'black'} strokeWidth={2}>
                        </Rect>
                        <Text
                            y={30}
                            x={140}
                            stroke={"black"}
                            text={'Aris-2'}
                            fill={"black"}
                            align={'center'}
                            fontSize={100}
                        />
                    </Group>
                    {clients.map((element, index) => {
                        return <List x={CONST_CORDS.START_CLIENT.x} y={CONST_CORDS.START_CLIENT.y * (2 * -index)}>
                            <ListItem text={element} width={CONST_CORDS.LIST_WIDTH} height={CONST_CORDS.HEIGHT_ITEM} y={0}/>
                                {['280', "270", "290", "210"].map((el, i) => {
                                    return <ListItem align={'left'} text={el} width={CONST_CORDS.LIST_WIDTH} height={CONST_CORDS.HEIGHT_ITEM} y={(i+1)*CONST_CORDS.HEIGHT_ITEM}/>
                                })}
                        </List>
                    })}
                    {/*<List x={400} y={400}>*/}
                    {/*    <ListItem text={'Client 10-04'} width={500} height={70} y={0}/>*/}
                    {/*    {['280', "270", "290", "210", "240", "260"].map((el, i) => {*/}
                    {/*        return <ListItem align={'left'} text={el} width={500} height={70} y={(i+1)*70}/>*/}
                    {/*    })}*/}
                    {/*</List>*/}
                    <List x={1300} y={1100}>
                        <ListItem text={'Warehouse'} width={500} height={70} y={0}/>
                        {joins.warehouse.map((element) => {
                            wr_coord_y = wr_coord_y + 70
                            return <ListItem align={'left'} text={element} width={500} height={70} y={wr_coord_y}/>
                        })}
                    </List>
                    {joins.warehouse.map((element) => {
                        line_coord_y += 70
                        return <Line points={[1300, 1135 + line_coord_y, 420 + 500, 2000 + 105]} stroke={'white'}
                                     strokeWidth={2}/>
                    })}
                    <List x={2000} y={1700}>
                        <ListItem text={'fbd t_me'} width={500} height={70} y={0}/>
                        {["04","05"].map((el, i) => {
                            return <ListItem align={'left'} text={el} width={500} height={70} y={(i+1)*70}/>
                        })}
                    </List>

                    <List x={420} y={2000}>
                        <ListItem text={'Server 10-04'} width={500} height={70} y={0}/>
                        {['280', "270", "290", "210", "240", "260"].map((el, i) => {
                            return <ListItem align={'left'} text={el} width={500} height={70} y={(i+1)*70}/>
                        })}
                    </List>
                </Group>
                <Group onDragMove={e => {
                    const position = e.target.position();
                    setToCoords({x: position.x, y: position.y})
                }}
                       draggable={true} x={toCoords.x} y={toCoords.y}>
                    <Rect width={3000} height={3000} stroke={'black'} strokeWidth={2}>
                    </Rect>

                    <Group draggy={0}
                           x={2400}
                           width={600}
                    >
                        <Rect width={600} height={180} stroke={'black'} strokeWidth={2}>
                        </Rect>
                        <Text
                            y={30}
                            x={140}
                            stroke={"black"}
                            text={'Aris-1'}
                            fill={"black"}
                            align={'center'}
                            fontSize={100}
                        />
                    </Group>

                    <List x={400} y={400}>
                        <ListItem text={'Client 10-04'} width={500} height={70} y={0}/>
                        {['280', "270", "290", "210", "240", "260"].map((el, i) => {
                            return <ListItem align={'left'} text={el} width={500} height={70} y={(i+1)*70}/>
                        })}
                    </List>

                    <List x={1300} y={1100}>
                        <ListItem text={'Warehouse'} width={500} height={70} y={0}/>
                        {['DI-250','DI-251','DI-252','DI-253','DI-253','DI-253','DI-253'].map((el, i) => {
                            return <ListItem align={'left'} text={el} width={500} height={70} y={(i+1)*70}/>
                        })}
                    </List>
                    <List x={2000} y={1700}>
                        <ListItem text={'fbd t_me'} width={500} height={70} y={0}/>
                        <ListItem align={'left'} text={"04"} width={500} height={70} y={70}/>
                        <ListItem align={'left'} text={"05"} width={500} height={70} y={140}/>
                    </List>
                    <List x={420} y={2000}>
                        <ListItem text={'Server 10-04'} width={500} height={70} y={0}/>
                        {['280', "270", "290", "210", "240", "260"].map((el, i) => {
                            return <ListItem align={'left'} text={el} width={500} height={70} y={(i+1)*70}/>
                        })}
                    </List>
                </Group>
                {fromCoords.x > toCoords.x &&
                    <Line points={[fromCoords.x + 400, fromCoords.y + 400, toCoords.x + 900, toCoords.y + 400]}
                          stroke={'red'}
                          strokeWidth={10}/>}
                {fromCoords.x < toCoords.x &&
                    <Line points={[fromCoords.x + 900, fromCoords.y + 400, toCoords.x + 400, toCoords.y + 400]}
                          stroke={'red'}
                          strokeWidth={10}/>}
            </Layer>
        </Map>

    )
}

