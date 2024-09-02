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
    selectedTask: Task | null;
    isCreatingTask: boolean,
    isViewingTask: boolean,
    isEditingTask: boolean,
    isModalOpen: boolean,
    status: 'init' | 'loading' | 'error' | 'success'; 
}




export interface ITaskRequest {
    id?: string;
    title: string;
    dueDate: Date;
    habitId?: string;
}


export interface Task{
    id: string;
    title: string;
    createDate: Date;
    dueDate: Date;
    isCompleted: boolean;
    habitId?: string;
}

export interface HabitSelectForTaskViewProps {
    habitId: string | undefined;
    setHabitId: React.Dispatch<React.SetStateAction<string | undefined>>;
}  

export interface HabitSelectForTaskViewProps {
    habitId: string | undefined;
    setHabitId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface DatePickerViewProps {
    selectedDate: Date | null;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
}
