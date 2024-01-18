import type { FC } from 'react';
import React from 'react';
import moment from 'moment/moment';
import { Dustbin } from '@/components/dustbins/Dustbin';
import { useTodoCalendar } from '@/hooks/use-todo-calendar';
import { bgColorOptions } from '@/components/palettes/ColorPalette';

export const MonthCalendar: FC = function MainMonthCalendar() {
  const {
    startDay,
    endDay,
    year,
    month,
    day,
    todoListByDate,
  } = useTodoCalendar();

  const getTextColor = (currentDay: moment.Moment) => {
    const isSameMonth = (currentDay.month() === month - 1);

    if (currentDay.day() === 6) {
      return isSameMonth ? 'text-blue-400' : 'text-blue-400/50';
    }
    if (currentDay.day() === 0) {
      return isSameMonth ? 'text-red-400' : 'text-red-400/50';
    }
    return isSameMonth ? 'text-gray-700' : 'text-gray-700/50';
  };
  const getBackgroundColor = (currentDay: moment.Moment) => {
    if (currentDay.isSame(moment([year, month - 1, day]), 'day')) {
      return '';
    }
    if (currentDay.isSame(moment(), 'day')) {
      return 'bg-gray-300';
    }
    return '';
  };

  const getTodoListByDate = (currentDay: moment.Moment) => todoListByDate[currentDay.format('YYYY-MM-DD')] || [];

  const getTodoBgColor = (todoItem:any) => bgColorOptions.find(
    (item) => item.name === todoItem.color,
  )?.color;

  return (
    <div className="flex flex-col divide-y divide-[#BEBEBE] border border-[#BEBEBE] w-full h-full bg-white rounded-xl drop-shadow-md text-center">
      <div className="flex divide-x divide-[#BEBEBE] font-bold">
        {Array.from({ length: 7 }).map((_, index2) => {
          const currentDay = moment(startDay).add(7 + index2, 'days');
          return (
            <div
              className="flex-1 relative py-[4px]"
              key={currentDay.toJSON()}
            >
              <span className={`inline-block ${getTextColor(currentDay)}`}>
                {currentDay.locale('ko').format('ddd')}
              </span>
            </div>
          );
        })}
      </div>
      {Array.from({ length: ((endDay.diff(startDay, 'days') + 1) / 7) }).map((nWeek, index1) => {
        const currentWeekDay = moment(startDay).add(7 * index1, 'days');
        return (
          <div
            className="flex grow divide-x divide-[#BEBEBE]"
            key={`week-${currentWeekDay.toJSON()}`}
          >
            {Array.from({ length: 7 }).map((__, index2) => {
              const currentDay = currentWeekDay.clone().add(index2, 'days');
              return (
                <Dustbin
                  name={currentDay.format('YYYY-MM-DD')}
                  key={currentDay.toJSON()}
                >
                  <div
                    className="flex-1 h-full relative py-2"
                  >
                    <span className={`text-center inline-block leading-6 w-6 rounded-full ${getTextColor(currentDay)} ${getBackgroundColor(currentDay)}`}>
                      {currentDay.format('D')}
                    </span>
                    <div className="text-black relative">
                      <div className="absolute flex flex-col space-y-1 w-full">
                        {getTodoListByDate(currentDay).map((todo:any) => (
                          <div key={todo.id} className={`text-white mx-1.5 rounded-md text-sm p-1 ${getTodoBgColor(todo)}`}>
                            {todo.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dustbin>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
