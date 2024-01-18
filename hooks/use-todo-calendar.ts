import moment from 'moment';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { dateAtom, todoListAtom } from '@/recoil/atoms/todo-calendar-atom';
import { useMemo } from 'react';
import { todoListByDateState } from '@/recoil/selectors/todo-calendar-selectors';

export const useTodoCalendar = function useTodoCalendar() {
  const [date] = useRecoilState(dateAtom);
  const year = date.year();
  const month = date.month() + 1;
  const day = date.date();

  const startDay = useMemo(() => {
    const startOfMonth = moment([year, month - 1, 1]);
    return startOfMonth.startOf('week');
  }, [year, month]);
  const endDay = useMemo(() => {
    const endOfMonth = moment([year, month - 1, 1]).endOf('month');
    return endOfMonth.endOf('week');
  }, [year, month]);

  const todoListByDate = useRecoilValue(todoListByDateState);

  return {
    startDay,
    endDay,
    year,
    month,
    day,
    todoListByDate,
  };
};
