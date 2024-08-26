export interface Todo {
    id: string;
    text: string;
    isChecked: boolean;
}
export interface TodoPageProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    allTodos: Todo[];
    setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    toggleChecked: (id: string) => void; 
    deleteTodo: (id: string) => void;
}
export interface HomeTodoProps {
    toggleChecked: (id: string) => void; 
    deleteTodo: (id: string) => void;
}
export interface ListItemsProps {
    text: string;
    deleteTodo: () => void;
    isChecked: boolean;
    toggleChecked: () => void;
  }
  export interface SokhanBozorgan {
    author: string;
    author_id:string;
    text:string
  }