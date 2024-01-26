import { useRecoilState, useRecoilValue } from 'recoil';
import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { useMemo } from 'react';
import { todoListByDateState } from '@/recoil/selectors/todo-calendar-selectors';
import dayjs from 'dayjs';

export const useTodoCalendar = function useTodoCalendar() {
  const [datetime] = useRecoilState(dateAtom);
  const year = datetime.year();
  const month = datetime.month() + 1;
  const date = datetime.date();

  const startDay = useMemo(() => {
    const startOfMonth = dayjs(new Date(year, month - 1, 1));
    return startOfMonth.startOf('week');
  }, [year, month]);
  const endDay = useMemo(() => {
    const endOfMonth = dayjs(new Date(year, month - 1, 1)).endOf('month');
    return endOfMonth.endOf('week');
  }, [year, month]);

  const todoListByDate = useRecoilValue(todoListByDateState);

  return {
    startDay,
    endDay,
    year,
    month,
    date,
    todoListByDate,
  };
};
