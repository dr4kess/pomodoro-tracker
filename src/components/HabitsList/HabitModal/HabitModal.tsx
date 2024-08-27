import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { habitsActions, selectIsCreatingHabit, selectIsEditingHabit, selectSelectedHabit } from '../../../store/slices/habits.slice';
import { Habit } from '../../../store/types/habits.types';

import { useActionCreators, useAppSelector } from '../../../hooks/hooks';

import HabitModalHeader from './HabitModalComponents/HeaderView';
import NameInputView from './HabitModalComponents/NameInputView';
import CountView from './HabitModalComponents/CountView';
import ColorSelectView from './HabitModalComponents/ColorSelectView';

import './HabitModal.scss'

const HabitModal = () => {

  const actions = useActionCreators(habitsActions)
  const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
  const isEditingHabit = useAppSelector(selectIsEditingHabit)
  const selectedHabit = useAppSelector(selectSelectedHabit)
  
  const [habitName, setHabitName] = useState('');
  const [habitCount, setHabitCount] = useState(selectedHabit?.count || 1);
  const [habitColor, setHabitColor] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      const newHabit: Habit = {
        id: selectedHabit?.id || uuidv4(), // Используем существующий id, если редактируем, иначе создаем новый
        name: habitName,
        count: habitCount,
        color: habitColor,
        completedCount: selectedHabit?.completedCount || 0, // Сохраняем текущий прогресс
      };
      
      if(isCreatingHabit)  actions.addHabit(newHabit)
      else if(isEditingHabit) actions.editHabit(newHabit)

    };


  return(
      <div className="habit-creating-modal-wrapper">
          <form onSubmit={handleSubmit}>
              <HabitModalHeader/>

              <div className="habit-creating-modal-content-wrapper">
                <NameInputView habitName={habitName} setHabitName={setHabitName}/>
                <CountView habitCount={habitCount} setHabitCount={setHabitCount}/>
                <ColorSelectView habitColor={habitColor} setHabitColor={setHabitColor}/>
              </div>
          </form>
      </div>
  )
}

export default HabitModal



