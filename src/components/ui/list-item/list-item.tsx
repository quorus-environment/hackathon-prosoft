import React, {FC} from 'react';
import {Group, Rect, Text} from "react-konva";


type TListItem = {
    text: string
    width: number
    height: number
    x?: number
    y?: number
    align?: 'center' | 'left' | "right"
}

export const ListItem: FC<TListItem> = ({text, width, height, y, x, align = "center"}) => {
    return (
        <Group x={x} y={y}>
            <Rect width={width} height={height} stroke={'black'} strokeWidth={2}>
            </Rect>
            <Text
                strokeWidth={2}
                stroke={"black"}
                text={text}
                width={width}
                fill={"black"}
                x={10}
                y={10}
                fontSize={50}
                align={align}
            />
        </Group>
    );
};
