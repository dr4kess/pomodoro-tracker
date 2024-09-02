import { COLOR_OPTIONS } from "../../../../constants/habits.constatns";
import { useAppSelector } from "../../../../hooks/hooks";
import { selectHabits } from "../../../../store/slices/habits.slice";
import { selectIsCreatingTask, selectIsEditingTask, selectSelectedTask } from "../../../../store/slices/tasks.slice";
import { HabitSelectForTaskViewProps } from "../../../../store/types/tasks.types";

const HabitSelectView: React.FC<HabitSelectForTaskViewProps> = ({ habitId, setHabitId }) => {

    const isCreatingTask = useAppSelector(selectIsCreatingTask);
    const isEditingTask = useAppSelector(selectIsEditingTask);
    const selectedTask = useAppSelector(selectSelectedTask);
    const habits = useAppSelector(selectHabits);

    return (
        <div className="task-modal-input-group">
            <label htmlFor="habit-select">Habit</label>
            {(isCreatingTask || isEditingTask) ? (
                <select
                    id="habit-select"
                    value={habitId || ''}
                    onChange={(e) => setHabitId(e.target.value)}
                >
                    <option value="" disabled>
                        Choose Habit
                    </option>
                    {habits.map((habit) => (
                        <option key={habit._id} value={habit._id}>
                            {habit.title}
                        </option>
                    ))}
                </select>
            ) : (
                <div className="habit-name">
                    {selectedTask?.habitId && (
                        <span>
                            {habits.find(habit => habit._id === selectedTask.habitId)?.title || 'No Habit'}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
export default HabitSelectView;