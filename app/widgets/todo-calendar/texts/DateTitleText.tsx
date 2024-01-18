'use client';

import { useRecoilState } from 'recoil';
import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { FC } from 'react';

interface DateTitleTextProps {
  className?: string
}
export const DateTitleText: FC<DateTitleTextProps> = function DateTitleText({ className }) {
  const [date] = useRecoilState(dateAtom);

  return (
    <div className={`text-2xl font-bold px-4 py-2.5 rounded-xl bg-slate-500 ${className}`}>
      {date.format('YYYY년 M월')}
    </div>
  );
};
