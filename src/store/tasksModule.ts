import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../Types";

type State = {
  count: number;
  tasks: Task[];
};

const initialState: State = {
  count: 2,
  tasks: [
    {
      id: 2,
      title: "次のTodo",
      done: false
    },
    {
      id: 1,
      title: "最初のTodo",
      done: true
    }
  ]
};

const tasksModule = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state: State, action: PayloadAction<string>) {
      state.count++;

      const newTask: Task = {
        id: state.count,
        title: action.payload,
        done: false
      };

      state.tasks = [newTask, ...state.tasks];
    },
    doneTask(state: State, action: PayloadAction<Task>) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.done = !task.done;
      }
    },
    deleteTask(state: State, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    }
  }
});

export const { addTask, doneTask, deleteTask } = tasksModule.actions;

export default tasksModule;

/**
name
このcreateSliceを識別するための名前を付けます。

initialState
ステートの初期データを入れます。
ここではあらかじめ作成したinitialStateをそのまま入れてます。

reducers
ステートを変更する為の処理はここに書きます。
各コンポーネントで書いていた関数をこちらに移動しましょう。
ここで設定する関数は、第一引数にstateを受け取り、実行時に渡した引数は第二引数にactionとして受け取ります。実際の値はaction.payloadで取り出します。
設定したReducerはtasksModule.actions.addTask()で実行できます。
コンポーネントで使いやすいようにtasksModule.actionsでエクスポートしておきましょう。
このようにすることでコンポーネントからaddTask()だけで実行できるようになります。 
 */
