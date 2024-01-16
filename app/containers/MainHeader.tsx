import { FC } from 'react';
import { DateTitleText } from '@/app/widgets/todo-calendar/texts/DateTitleText';
import { DecreaseMonthButton } from '@/app/widgets/todo-calendar/buttons/DecreaseMonthButton';
import { TodayButton } from '@/app/widgets/todo-calendar/buttons/TodayButton';
import { IncreaseMonthButton } from '@/app/widgets/todo-calendar/buttons/IncreaseMonthButton';

export const MainHeader: FC = function MainHeader() {
  return (
    <div className="h-[var(--header-height)]">
      <div className="h-full flex flex-col mx-6">
        <div className="h-4 w-full" />
        <div className="my-auto flex gap-2">
          <DateTitleText className="my-auto" />
          <DecreaseMonthButton />
          <TodayButton />
          <IncreaseMonthButton />
        </div>
      </div>
    </div>
  );
};
