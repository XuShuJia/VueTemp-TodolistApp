export interface ITodoItem {
  id: string;
  title: string;
  message: string;
  complete: boolean;
  deadline: string;
}

export type TTodoList = ITodoItem[];
