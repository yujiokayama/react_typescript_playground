export type Task = {
  id: number;
  title: string;
  done: boolean;
};

export type TypeUser = {
  id: number;
  createdAt?: string;
  name: string;
  avatar?: string;
};
