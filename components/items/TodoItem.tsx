import type { FC } from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '@/types/ItemTypes';
import { CheckBox } from '@/components/check-boxs/CheckBox';
import { ColorOption, bgColorOptions } from '@/components/palettes/ColorPalette';

export interface TodoOptions {
  id: number | string,
  text: string,
  finished: boolean,
  color: ColorOption
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
        alert(`You dropped ${JSON.stringify(item.options.text)} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 'opacity-40' : '';
  const bgColor = bgColorOptions.find((colorOption) => colorOption.name === options.color)?.color;

  return (
    <div
      ref={drag}
      className={`w-full bg-[#004E6F] rounded-md p-3 flex gap-2 cursor-grab active:cursor-grabbing ${className} ${opacity} ${bgColor}`}
      data-testid="box"
    >
      <CheckBox
        className="my-auto"
        value={options.finished}
      />
      {options.text}
    </div>
  );
};
