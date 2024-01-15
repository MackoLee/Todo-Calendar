import type { FC } from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '@/components/drag-and-drop/ItemTypes';
import { TodoFinishedCheckBox } from '@/components/todo/atoms/TodoFinishedCheckBox';

export interface TodoOptions {
  id: number | string,
  name: string,
  finished: boolean,
}
export interface TodoItemProps {
  className?: string,
  options: TodoOptions
}

interface DropResult {
  name: string
}

export const TodoItem: FC<TodoItemProps> = function TodoItem({ className = '', options }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { options },
    options: {
      dropEffect: 'cursor-grabbing',
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        alert(`You dropped ${JSON.stringify(item.options.name)} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 'opacity-40' : '';
  return (
    <div
      ref={drag}
      className={`w-full bg-[#004E6F] rounded-md p-3 flex gap-2 cursor-grab active:cursor-grabbing ${className} ${opacity}`}
      data-testid="box"
    >
      <TodoFinishedCheckBox
        className="my-auto"
        value={options.finished}
      />
      {options.name}
    </div>
  );
};
