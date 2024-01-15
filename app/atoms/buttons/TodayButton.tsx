'use client';

import { useRecoilState } from 'recoil';
import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import moment from 'moment';

export const TodayButton: FC = function TodayButton() {
  const [, setDate] = useRecoilState(dateAtom);
  function onClick() {
    setDate(moment());
  }
  return (
    <Button
      className="bg-primary"
      onClick={() => onClick()}
    >
      Today
    </Button>
  );
};
