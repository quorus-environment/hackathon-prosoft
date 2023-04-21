import React, { FC, ReactElement, useCallback, useState } from "react"
import Konva from "konva"
import KonvaEventObject = Konva.KonvaEventObject
import { Stage } from "react-konva"

type TMap = {
  children: ReactElement
}

export const Map: FC<TMap> = ({ children }) => {
  const [isDragging, setDragging] = useState(false)
  const onWheel = useCallback((event: KonvaEventObject<WheelEvent>) => {
    event.evt.preventDefault()
    const stage = event.target.getStage()
    if (!stage) {
      return
    }
    const oldScale = stage.scaleX()
    // Получаем предыдущее значение курсора
    const { x: pointerX, y: pointerY } = stage.getPointerPosition() || {
      x: 0,
      y: 0,
    }
    const newScale = event.evt.deltaY < 0 ? oldScale * 1.06 : oldScale / 1.06
    stage.scale({ x: newScale, y: newScale })
    const newPos = {
      x: pointerX - ((pointerX - stage.x()) / oldScale) * newScale,
      y: pointerY - ((pointerY - stage.y()) / oldScale) * newScale,
    }
    stage.position(newPos)
  }, [])

  return (
    <Stage
      x={110}
      y={500}
      scale={{ x: 0.09, y: 0.09 }}
      style={{ cursor: isDragging ? "grabbing" : "default" }}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      draggable
      onWheel={onWheel}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      {children}
    </Stage>
  )
}
