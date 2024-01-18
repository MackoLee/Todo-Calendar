import { useRecoilState } from 'recoil';
import {
  isOpenAtom, modeAtom, selectedColorAtom, taskTextAtom, TodoDialogMode,
} from '@/recoil/atoms/todo-dialog-atom';
import { ColorOption } from '@/components/palettes/ColorPalette';
import { todoListAtom } from '@/recoil/atoms/todo-calendar-atom';

export const useTodoDialog = function useTodoDialog() {
  const [, setIsOpen] = useRecoilState(isOpenAtom);
  const [, setMode] = useRecoilState(modeAtom);
  const [selectedColorValue, setSelectedColor] = useRecoilState(selectedColorAtom);
  const [taskTextValue, setTaskText] = useRecoilState(taskTextAtom);

  const onOpen = ({
    mode = 'add' as TodoDialogMode,
    selectedColor = 'cyan-500' as ColorOption,
    taskText = '',
  }) => {
    setMode(mode);
    setSelectedColor(selectedColor);
    setTaskText(taskText);
    setIsOpen(true);
  };

  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const addTodoList = () => {
    // TODO: 추가가 됐을 때, API를 통해 서버에 저장하는 로직을 구현해야 합니다.
    setTodoList([...todoList, {
      id: todoList.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1,
      color: selectedColorValue as ColorOption,
      text: taskTextValue,
      finished: false,
      start_date: '',
      end_date: '',
      is_all_day: true,
    }]);
  };

  return {
    onOpen,
    addTodoList,
  };
};
