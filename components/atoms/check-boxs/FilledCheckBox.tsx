import type { FC } from 'react';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

export interface ColorCheckBoxProps {
  className?: string
  value?: boolean,
  onClick: (event:boolean) => void
}

const iconClassName = 'text-[22px] text-center';
export const FilledCheckBox: FC<ColorCheckBoxProps> = function FilledCheckBox({
  className = '',
  value = false,
  onClick = () => null,
}) {
  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={() => onClick(!value)}
    >
      {
        value
          ? <FaCheckSquare className={iconClassName} />
          : <FaSquare className={iconClassName} />
      }
    </div>
  );
};
