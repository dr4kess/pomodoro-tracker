import { useMemo } from "react"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import { useActionCreators, useAppSelector } from "../../hooks/hooks"
import { habitsActions, selectHabits } from "../../store/slices/habits.slice"

import { useHorizontalScroll } from "../../hooks/useHorizontalScroll"
import { Habit } from "../../store/types/habits.types"

import './HabitsList.scss'
import { trailColorForHabit } from "../../constants/habits.constatns";

const HabitsList = () => {
    const habits = useAppSelector(selectHabits)
    const actions = useActionCreators(habitsActions)

    const scrollRef = useHorizontalScroll()

    const handleCreatingHabit = () => {
        actions.setCreatingHabit()
    }

    const handleHabitClick = (habit: Habit) => {
        actions.setViewingHabit(habit);
    };

    const renderedHabits = useMemo(() => {
        return habits.map((habit) => {
            const percentage = (habit.completedCount / habit.count) * 100;
            return(
                <CircularProgressbarWithChildren className="habit-circle-progress"
                value={percentage}
                styles={buildStyles({
                  pathColor: trailColorForHabit(habit.color),
                  trailColor: habit.color,
                })}
              >
                <div
                key={habit.id}
                className="habit-circle"
                style={{ backgroundColor: habit.color }}
                onClick={() => handleHabitClick(habit)}
              >

                  <div>
                    {habit.name}
                  </div>
              </div>
              </CircularProgressbarWithChildren>

            )  
    });
      }, [habits]);

    return(

        <div className="habits-wrapper">
            <span className='habits-span'>Your Habits </span>

            <div className="habits-list-wrapper" ref={scrollRef}>

                {habits.length === 0 ? 
                <>
                    <div className='habit-circle-add' onClick={handleCreatingHabit}>+</div>
                    {new Array(Math.max(3, 0)).fill(null).map((_, index) => (
                        <div key={`empty-${index}`} className='habit-circle' />
                    ))}
                </>
                : 
                <>   
                    {renderedHabits}
                    <div className='habit-circle-add' onClick={handleCreatingHabit}>+</div>
                </>}
            </div>
        </div>
    )
}

export default HabitsList