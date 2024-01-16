import type { FC } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@/types/ItemTypes';
import { Button } from '@/components/ui/button';

export const RemoveTodoButton: FC = function RemoveTodoButton() {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Trash' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const doBounce = canDrop ? 'animate-bounce' : '';
  return (
    <Button
      ref={drop}
      size="icon"
      variant="outline"
      disabled={!canDrop}
      className="cursor-pointer"
    >
      <FaTrashAlt
        className={`text-black ${doBounce}`}
      />
    </Button>
  );
};
