import type { FC } from 'react';
import { ReactNode } from 'react';

export interface DialogLabelTextProps {
  label: string,
  labelClassName?: string,
  children?: ReactNode,
}
export const LabelText :FC<DialogLabelTextProps> = function DialogLabelText({
  label = 'Label',
  labelClassName,
  children,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="label" className={`text-slate-400 text-sm ${labelClassName}`}>
        {label}
      </label>
      {children}
    </div>
  );
};
