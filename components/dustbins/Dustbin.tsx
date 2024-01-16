import { useMemo, type FC, ReactNode } from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '@/types/ItemTypes';

export interface DustbinProps {
  className?: string,
  name?: any,
  children: ReactNode
}

export const Dustbin: FC<DustbinProps> = function Dustbin({ className = '', name = 'Dustbin', children }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  const backgroundColor = useMemo(() => {
    const defaultColor = 'hover:bg-gray-200 ';

    if (isActive) {
      return `${defaultColor}`;
    }
    if (canDrop) {
      return `${defaultColor}`;
    }
    return `${defaultColor}`;
  }, [isActive, canDrop]);

  return (
    <div
      ref={drop}
      className={`w-full h-full ${backgroundColor} ${className}`}
      data-testid="dustbin"
    >
      {children}
    </div>
  );
};
