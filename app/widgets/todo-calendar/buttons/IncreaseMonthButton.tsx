'use client';

import { useRecoilState } from 'recoil';
import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { FaArrowRight } from 'react-icons/fa';
import { FC } from 'react';
import { IconButton } from '@/components/buttons/IconButton';

export const IncreaseMonthButton: FC = function IncreaseMonthButton() {
  const [date, setDate] = useRecoilState(dateAtom);
  function onClick() {
    setDate(date.clone().add(1, 'month').startOf('month'));
  }
  return (
    <IconButton
      onClick={() => onClick()}
      icon={FaArrowRight}
    />
  );
};
