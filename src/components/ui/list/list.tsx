import React, {Children, FC, ReactElement, useMemo} from 'react';
import {Group, Rect, Text} from "react-konva";


type TList = {
    x: number
    y: number
    children: ReactElement | ReactElement[] | any
}

export const List: FC<TList> = ({children, y, x }) => {
    const liHeight = useMemo(() => {
        return Children.map(children,el => el.props.height)[0]
    },[children])

    const liWidth = useMemo(() => {
        return Children.map(children,el => el.props.width)[0]
    },[children])

    const length = useMemo(() => {
        return Children.count(children)
    }, [children])

    return (
        <Group  draggable={false} x={x} y={y}>
            <Rect width={liWidth} height={length * liHeight} stroke={'black'} strokeWidth={2}>
            </Rect>
            <Text text={`${length}`} width={100} fontSize={80}></Text>
            {children}
        </Group>
    );
};
