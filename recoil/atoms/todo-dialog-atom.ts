import { atom, RecoilState } from 'recoil';

// export const dateAtom = atom({
//   key: 'date',
//   default: moment(),
// });
//
// export const todoListAtom = atom({
//   key: 'todoList',
//   default: [
//     {
//       id: 1,
//       name: '레몬 향이 나고 부드러운 바디워시 사야 함',
//       finished: false,
//     },
//     {
//       id: 2,
//       name: '떡볶이 만들어 먹기',
//       finished: false,
//     },
//   ],
// });

export const todoDialogOpenAtom = atom({
  key: 'todoDialogOpen',
  default: false,
});

export const selectedColorAtom:RecoilState<any> = atom({
  key: 'selectedColor',
  default: 'cyan-900',
});
