import type { FC } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

export interface TodoFinishedCheckBoxProps {
  className?: string
  value?: boolean
}
export const TodoFinishedCheckBox: FC<TodoFinishedCheckBoxProps> = function TodoFinishedCheckBox({
  className = '',
  value = false,
}) {
  return (
    <div
      className={`${className}`}
    >
      {
        value
          ? <FaCheckSquare className="text-white" />
          : <FaRegSquare className="text-white" />
      }
    </div>
  );
};
