
export interface Habit{
    id: string,
    name: string;
    count: number;
    completedCount: number;
    color: string;
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
    habitName: string;
    setHabitName: React.Dispatch<React.SetStateAction<string>>;
  }
export interface CountViewProps {
    habitCount: number;
    setHabitCount: React.Dispatch<React.SetStateAction<number>>;
  }
export interface ColorSelectViewProps {
    habitColor: string;
    setHabitColor: React.Dispatch<React.SetStateAction<string>>;
  }