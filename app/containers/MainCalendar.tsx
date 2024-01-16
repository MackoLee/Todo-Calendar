import { FC } from 'react';
import { MonthCalendar } from '@/app/widgets/todo-calendar/MonthCalendar';

export const MainCalendar: FC = function MainCalendar() {
  return (
    <div className="h-full">
      <MonthCalendar />
    </div>
  );
};
