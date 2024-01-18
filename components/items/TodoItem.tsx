import type { FC } from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '@/types/ItemTypes';
import { CheckBox } from '@/components/check-boxs/CheckBox';
import { ColorOption, bgColorOptions } from '@/components/palettes/ColorPalette';
import moment from 'moment';

export interface TodoOptions {
  id: number | string,
  text: string,
  finished: boolean,
  color: ColorOption,
  start_date: string,
  end_date: string
}
export interface TodoItemProps {
  className?: string,
  options: any,
  onItemDropped?: (item: TodoOptions, date: string) => void
}

interface DropResult {
  name: string
}

export const TodoItem: FC<TodoItemProps> = function TodoItem({ className = '', options, onItemDropped = () => null }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { options },
    options: {
      dropEffect: 'cursor-grabbing',
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        onItemDropped(item.options, dropResult.name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 'opacity-40' : '';
  const bgColor = bgColorOptions.find((colorOption) => colorOption.name === options.color)?.color;

  const hasDate = (_options: TodoOptions) => (_options.start_date && _options.end_date);

  return (
    <div
      ref={drag}
      className={`w-full bg-[#004E6F] rounded-md p-3 cursor-grab active:cursor-grabbing ${className} ${opacity} ${bgColor}`}
      data-testid="box"
    >
      <div className="flex gap-2 ">
        <CheckBox
          className="my-auto"
          value={options.finished}
        />
        <div className="gap-1">
          <p>
            {options.text}
          </p>
          {hasDate(options) && (
            <p className="text-gray-100 text-sm">
              {moment(options.start_date).format('YYYY년 M월 D일')}
            </p>
          )}

        </div>
      </div>

    </div>
  );
};
