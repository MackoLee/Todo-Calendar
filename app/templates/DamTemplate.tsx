'use client';

import { DateTitleText } from '@/app/atoms/texts/DateTitleText';
import { DecreaseMonthButton } from '@/app/atoms/buttons/DecreaseMonthButton';
import { TodayButton } from '@/app/atoms/buttons/TodayButton';
import { IncreaseMonthButton } from '@/app/atoms/buttons/IncreaseMonthButton';
import { MainMonthCalendar } from '@/app/organisms/calendars/MainMonthCalendar';
import { RemoveTodoButton } from '@/app/atoms/buttons/RemoveTodoButton';
import { AddTodoDialog } from '@/app/organisms/dialogs/AddTodoDialog';
import { MainTodoList } from '@/app/organisms/todos/MainTodoList';
import { MainHeader } from '@/app/organisms/elements/MainHeader';

export const DamTemplate = function DamTemplate() {
  return (
    <div className="flex flex-col w-full h-full bg-[#00516A] text-white">
      <div className="">
        <MainHeader />
      </div>
      <div className="flex-1">
        <div className="flex h-full px-6 pb-6 gap-5">
          <div className="basis-3/4">
            <MainMonthCalendar />
          </div>
          <div className="basis-1/4">
            <MainTodoList />
          </div>
        </div>
      </div>
    </div>
  );
};
