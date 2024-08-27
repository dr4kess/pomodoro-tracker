export interface Task {
    id: string;
    title: string;
    createDate: Date;
    dueDate: Date;
    isCompleted: boolean;
    habitId?: string;
  }

export interface TasksState {
    tasks: Task[];
    isCreatingTask: boolean;
    isEditingTask: boolean;
}