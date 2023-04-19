import './app.css'
import { Group, Layer, Rect,  Text} from "react-konva";
import React from "react";
import {Map} from "../components/map/map";
import {ListItem} from "../components/ui/list-item/list-item";
import {List} from "../components/ui/list/list";

export const App = () => {

    return (
        <Map>
            <Layer>
                <Group  x={window.innerWidth / 2} y={window.innerHeight / 2} width={500} height={500}>
                    <Rect width={3000} height={3000} stroke={'black'} strokeWidth={2}>
                    </Rect>
                    <Group y={0}
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
                    <List x={400} y={400} width={500} height={490}>
                        <ListItem text={'Client 10-04'} width={500} height={70} y={0}/>
                        <ListItem align={'left'} text={'280'} width={500} height={70} y={70}/>
                        <ListItem  align={'left'} text={"270"} width={500} height={70} y={140}/>
                        <ListItem  align={'left'} text={"290"} width={500} height={70} y={210}/>
                        <ListItem  align={'left'} text={"210"} width={500} height={70} y={280}/>
                        <ListItem  align={'left'} text={"240"} width={500} height={70} y={350}/>
                        <ListItem  align={'left'} text={"260"} width={500} height={70} y={420}/>
                    </List>

                    <List x={1300} y={1100} width={500} height={560}>
                        <ListItem text={'Warehouse'} width={500} height={70} y={0}/>
                        <ListItem align={'left'} text={'DI-250'} width={500} height={70} y={70}/>
                        <ListItem  align={'left'} text={'DI-251'} width={500} height={70} y={140}/>
                        <ListItem  align={'left'} text={'DI-252'} width={500} height={70} y={210}/>
                        <ListItem  align={'left'} text={'DI-253'} width={500} height={70} y={280}/>
                        <ListItem  align={'left'} text={'DI-253'} width={500} height={70} y={350}/>
                        <ListItem  align={'left'} text={'DI-253'} width={500} height={70} y={420}/>
                        <ListItem  align={'left'} text={'DI-253'} width={500} height={70} y={490}/>
                    </List>
                    <List x={2000} y={1700} width={500} height={210}>
                        <ListItem text={'fbd t_me'} width={500} height={70} y={0}/>
                        <ListItem  align={'left'} text={"04"} width={500} height={70} y={70}/>
                        <ListItem  align={'left'} text={"05"} width={500} height={70} y={140}/>
                    </List>
                    <List x={420} y={2000} width={500} height={490}>
                        <ListItem text={'Server 10-04'} width={500} height={70} y={0}/>
                        <ListItem align={'left'} text={'280'} width={500} height={70} y={70}/>
                        <ListItem  align={'left'} text={"270"} width={500} height={70} y={140}/>
                        <ListItem  align={'left'} text={"290"} width={500} height={70} y={210}/>
                        <ListItem  align={'left'} text={"210"} width={500} height={70} y={280}/>
                        <ListItem  align={'left'} text={"240"} width={500} height={70} y={350}/>
                        <ListItem  align={'left'} text={"260"} width={500} height={70} y={420}/>
                    </List>
                </Group>
            </Layer>
        </Map>

    )
}

