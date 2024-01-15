import { MonthCalendar } from '@/components/oranisms/calendar/MonthCanendar';
import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { useRecoilState } from 'recoil';
import { FC } from 'react';

export const MainMonthCalendar: FC = function MainMonthCalendar() {
  const [date] = useRecoilState(dateAtom);

  return (
    <MonthCalendar
      className="bg-[#F5F5F5] rounded-xl text-sm"
      year={date.year()}
      month={date.month() + 1}
      day={date.date()}
    />
  );
};
