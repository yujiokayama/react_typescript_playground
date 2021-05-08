import React, { useState, useEffect } from "react";
import { title } from "../Class";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../rootReducer";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../store/crudModule";

import { input } from "../Class";

const Crud: React.FC = () => {
  // ユーザー新規name
  const defaulName: string = "";
  const [name, setName] = useState(defaulName);

  // ユーザー更新name
  const [updateName, setUpdateName] = useState(defaulName);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setUpdateName(event.target.value);
  };

  // ユーザー更新ID
  const defaultID: number = 0;
  const [targetID, setTargetID] = useState(defaultID);
  const handleUpdate = (num: number) => {
    setTargetID(num);
  };

  /**
   * redux state
   */
  const { usersList } = useSelector((state: RootState) => {
    return state.crud;
  });

  /**
   * redux action
   */
  const dispatch = useDispatch();

  const handleCreateUser = async (): Promise<void> => {
    setName("");
    await dispatch(createUser(name));
    await dispatch(getUsers());
  };

  const handleGetUsers = async (): Promise<void> => {
    await dispatch(getUsers());
  };

  const handleUpdateUser = async (id: number): Promise<void> => {
    await dispatch(updateUser({ id, name: updateName }));
    await dispatch(getUsers());
    handleUpdate(0);
  };

  const handleDeleteUser = async (id: number): Promise<void> => {
    await dispatch(deleteUser(id));
    await dispatch(getUsers());
  };

  const updateModal = () => {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <input
                      type="text"
                      name=""
                      id=""
                      className={input.text}
                      onChange={handleInput}
                    />
                    <button
                      className="focus:outline-none text-white text-sm ml-2 py-1 px-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                      onClick={() => handleUpdateUser(targetID)}
                    >
                      更新
                    </button>
                    <button
                      className="focus:outline-none text-white text-sm ml-2 py-1 px-2 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg"
                      onClick={() => handleUpdate(0)}
                    >
                      キャンセル
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ライフサイクルメソッド
  useEffect(() => {
    // 作成時（初回レンダリング直後）に呼ばれる箇所
    handleGetUsers();
    return () => {
      // 終了時に呼ばれる箇所
    };
  }, []);

  return (
    <>
      <div>
        <h1 className={title.main}>CRUD処理</h1>
        {targetID > 0 && updateModal()}
        <div className="mb-4">
          <span>新規追加メンバー:</span>
          <input
            type="text"
            name=""
            id=""
            className={input.text}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button
            className="focus:outline-none text-white text-sm py-3 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
            onClick={handleCreateUser}
          >
            ユーザー追加
          </button>
        </div>
        {usersList.map((user) => {
          return (
            <div key={user.id} className="mb-3">
              <span>{user.name}</span>
              <button
                className="focus:outline-none text-white text-sm ml-2 py-1 px-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                onClick={() => handleUpdate(user.id)}
              >
                更新
              </button>

              <button
                className="focus:outline-none text-white text-sm ml-2 py-1 px-2 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg"
                onClick={() => handleDeleteUser(user.id)}
              >
                削除
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Crud;
