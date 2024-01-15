'use client';

import { useRecoilState } from 'recoil';
import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa';
import { FC } from 'react';

export const DecreaseMonthButton: FC = function DecreaseMonthButton() {
  const [date, setDate] = useRecoilState(dateAtom);
  function onClick() {
    setDate(date.clone().subtract(1, 'month').startOf('month'));
  }
  return (
    <Button
      className="bg-white text-black border"
      onClick={() => onClick()}
    >
      <div>
        <FaArrowLeft />
      </div>
    </Button>
  );
};
