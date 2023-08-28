import React from 'react'
import { useDraggable } from '@dnd-kit/core'

export const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className='h-10 w-40 bg-zinc-600 rounded flex items-center justify-center text-xl font-semibold text-zinc-50'
    >
      {props.children}
    </button>
  )
}
