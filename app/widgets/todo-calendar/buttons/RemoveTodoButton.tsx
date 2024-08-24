import React, { FC } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@/types/ItemTypes';
import { Button } from '@/components/ui/button';

export const RemoveTodoButton: FC = function RemoveTodoButton() {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: null }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  drop(buttonRef);

  const doBounce = canDrop ? 'animate-bounce' : '';
  return (
    <Button
      ref={buttonRef}
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
