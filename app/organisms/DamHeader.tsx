import type { FC } from 'react';
import { DateTitleText } from '@/app/molecules/texts/DateTitleText';
import { DecreaseMonthButton } from '@/app/molecules/buttons/DecreaseMonthButton';
import { IncreaseMonthButton } from '@/app/molecules/buttons/IncreaseMonthButton';
import { TodayButton } from '@/app/molecules/buttons/TodayButton';

export const DamHeader: FC = function DamHeader() {
  const a = 1;
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
