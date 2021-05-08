/**
 * 参考
 * https://www.cyokodog.net/blog/redux-toolkit-async-thunk/
 */

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { TypeUser } from "../Types";

/**
 * stateの型を設定
 */
type State = {
  usersList: TypeUser[];
};

/**
 * stateの初期値を設定
 */
const initialState: State = {
  usersList: []
};

/**
 * リクエストurl,headerの定義
 */
const usersUrl = "https://6034b7e8843b150017933293.mockapi.io/api/v1/users";
const headers = {
  "Content-Type": "application/json"
};

/**
 * 非同期処理対応のactionを定義する
 */

// create
export const createUser = createAsyncThunk(
  "api/createUser",
  async (name: string, thunk) => {
    const obj = {
      name
    };
    const method = "POST";
    const body = JSON.stringify(obj);
    const response = await fetch(usersUrl, {
      method,
      headers,
      body
    });
    if (response.ok) {
      return await response.json();
    }
    throw new Error("新規追加できません");
  }
);

// reed
export const getUsers = createAsyncThunk("api/getUsers", async (_, thunk) => {
  const response = await fetch(usersUrl, { headers });
  if (response.ok) {
    return await response.json();
  }
  throw new Error("fetch error");
});

// update
export const updateUser = createAsyncThunk(
  "modules/editMember",
  async ({ id, name }: TypeUser, thunk) => {
    const method = "PUT";
    const body = JSON.stringify({ name });
    const response = await fetch(`${usersUrl}/${id}`, {
      headers,
      method,
      body
    });
    if (response.ok) {
      return await response.json();
    }
    throw new Error("update error");
  }
);

// delete
export const deleteUser = createAsyncThunk(
  "api/delteUser",
  async (id: number, thunk) => {
    const method = "DELETE";
    const response = await fetch(`${usersUrl}/${id}`, {
      method
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("deletion failed");
    }
  }
);

const crudModule = createSlice({
  name: "crud",
  initialState,
  /**
   * 同期処理
   */
  reducers: {},
  /**
   * 非同期処理
   */
  extraReducers: (builder) => {
    /**
      pending: 非同期処理中
      fulfilled: 非同期処理の成功時
      rejected: 非同期処理の失敗時
     */

    /**
     * users取得
     */
    builder.addCase(
      getUsers.fulfilled,
      (state: State, action: PayloadAction<TypeUser[]>) => {
        return {
          ...state,
          usersList: action.payload
        };
      }
    );
    /**
     * user登録
     */
    builder.addCase(createUser.fulfilled, (state, action) => {
      return {
        ...state
      };
    });
    /**
     * user更新
     */
    builder.addCase(updateUser.fulfilled, (state, action) => {
      return {
        ...state
      };
    });
    /**
     * user削除
     */
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return {
        ...state
      };
    });
  }
});

// export const {} = crudModule.actions;

/**
 * get methods
 */
// const fetchUsers = () => {
//   axios
//     .get<TypeUser[]>(usersUrl, {
//       headers
//     })
//     .then((response) => {
//       setUsers(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

/**
 * post methods
 */
// const userParams = {
//   name
// };

// const createrUser = () => {
//   axios
//     .post(usersUrl, userParams)
//     .then((response) => {
//       fetchUsers();
//       setName("");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

/**
 * delete methods
 */
// const deleteUser = (id: number) => {
//   axios
//     .delete(`${usersUrl}/${id}`)
//     .then((response) => {
//       console.log(response.data);
//       handleGetUsers();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

/**
 * put methods
 */
// const updateUser = (id: number) => {
//   axios
//     .put(`${usersUrl}/${id}`, { name: updateName })
//     .then((response) => {
//       console.log(response.data);
//       handleUpdate(0);
//       handleGetUsers();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export default crudModule;
