'use client';

import { MainHeader } from '@/app/containers/MainHeader';
import { MainTodo } from '@/app/containers/MainTodo';
import { MainCalendar } from '@/app/containers/MainCalendar';
import { TodoDialog } from '@/app/widgets/todo-dialog/TodoDialog';

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className="flex flex-col w-full h-full bg-[#A3C5CB] text-white">
        <MainHeader />
        <div className="flex-1">
          <div className="flex h-full px-6 pb-6 gap-5">
            <div className="basis-3/4">
              <MainCalendar />
            </div>
            <div className="basis-1/4">
              <MainTodo />
            </div>
          </div>
        </div>
      </div>
      <TodoDialog />
    </main>
  );
}
