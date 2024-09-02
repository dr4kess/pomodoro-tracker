
export interface IHabitRequest {
  title: string;
  count: number;
  color?: string;
}


export interface Habit{
    _id: string,
    title: string;
    count: number;
    completedCount: number;
    color: string;
}

export interface IHabitUpdateRequest extends IHabitRequest {
  id: string;
}

export interface HabitsState {
    habits: Habit[];
    selectedHabit: Habit | null;
    isCreatingHabit: boolean,
    isViewingHabit: boolean,
    isEditingHabit: boolean,
    isModalOpen: boolean,
    status: 'init' | 'loading' | 'error' | 'success'; 
}


export interface NameInputViewProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
  }
export interface CountViewProps {
    habitCount: number;
    setHabitCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface ColorSelectViewProps {
    habitColor: string;
    setHabitColor: React.Dispatch<React.SetStateAction<string>>;
  }

