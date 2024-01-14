'use client';

import { useRecoilState } from 'recoil';
import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa';
import { FC } from 'react';

export const IncreaseMonthButton: FC = function IncreaseMonthButton() {
  const [date, setDate] = useRecoilState(dateAtom);
  function onClick() {
    setDate(date.clone().add(1, 'month').startOf('month'));
  }
  return (
    <Button
      className="bg-primary"
      onClick={() => onClick()}
    >
      <FaArrowRight />
    </Button>
  );
};
