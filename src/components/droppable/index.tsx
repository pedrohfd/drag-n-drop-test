import { useDroppable } from '@dnd-kit/core'

export const Droppable = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })
  const style = {
    color: isOver ? '#121212' : undefined,
    // backgroundColor: isOver ? 'lightgreen' : undefined,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='h-20 w-60 bg-zinc-200 rounded flex items-center justify-center text-xl font-semibold transition-colors'
    >
      {props.children}
    </div>
  )
}
