import React, {FC, ReactElement} from 'react';
import {Group, Rect} from "react-konva";


type TList = {
    x: number
    y: number
    width: number
    height: number
    children: ReactElement | ReactElement[] | any
}

export const List: FC<TList> = ({children, y, height, x, width }) => {
    return (
        <Group draggable={false} x={x} y={y}>
            <Rect width={width} height={height} stroke={'black'} strokeWidth={2}>
            </Rect>
            {children}
        </Group>
    );
};
