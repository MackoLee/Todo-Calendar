import { atom } from 'recoil';
import moment from 'moment';
import { ColorOption } from '@/components/palettes/ColorPalette';

export const dateAtom = atom({
  key: 'date',
  default: moment(),
});

export const todoListAtom = atom({
  key: 'todoList',
  default: [
    {
      id: 1,
      text: '레몬 향이 나고 부드러운 바디워시 사야 함',
      color: 'cyan-900' as ColorOption,
      finished: false,
      start_date: '2024-01-17',
      end_date: '2024-01-17',
      is_all_day: true,
    },
    {
      id: 2,
      text: '떡볶이 만들어 먹기',
      color: 'cyan-800' as ColorOption,
      finished: false,
      start_date: '',
      end_date: '',
      is_all_day: true,
    },
  ],
});
