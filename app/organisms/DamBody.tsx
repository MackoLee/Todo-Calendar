'use client';

import { MainMonthCalendar } from '@/app/molecules/calendars/MainMonthCalendar';
import { MainTodoList } from '@/app/molecules/todo/MainTodoList';
import { RemoveTodoButton } from '@/app/molecules/buttons/RemoveTodoButton';
import { AddTodoDialog } from '@/app/organisms/dialogs/AddTodoDialog';

export const DamBody = function DamBody() {
  return (
    <div className="flex h-full px-6 pb-6 gap-5">
      <div className="basis-3/4">
        <MainMonthCalendar />
      </div>
      <div className="basis-1/4">
        <div className="w-full h-full rounded-xl drop-shadow-md bg-white p-[18px]">
          <div className="flex justify-between mb-[18px]">
            <RemoveTodoButton />
            <AddTodoDialog />
          </div>
          <MainTodoList />
        </div>
      </div>

    </div>
  );
};
