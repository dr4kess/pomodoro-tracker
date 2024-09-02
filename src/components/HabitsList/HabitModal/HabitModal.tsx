import { useState } from 'react';

import { createHabitThunk, getHabitsThunk, updateHabitThunk } from '../../../store/thunks/habits.thunk';
import { IHabitRequest, IHabitUpdateRequest } from '../../../store/types/habits.types';
import { selectIsCreatingHabit, selectIsEditingHabit, selectSelectedHabit } from '../../../store/slices/habits.slice';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

import HeaderView from './HabitModalComponents/HeaderView';
import NameInputView from './HabitModalComponents/NameInputView';
import CountView from './HabitModalComponents/CountView';
import ColorSelectView from './HabitModalComponents/ColorSelectView';

import './HabitModal.scss'

const HabitModal = () => {
  const dispatch = useAppDispatch()
  const isCreatingHabit = useAppSelector(selectIsCreatingHabit)
  const isEditingHabit = useAppSelector(selectIsEditingHabit)
  const selectedHabit = useAppSelector(selectSelectedHabit)
  
  const [habitTitle, setHabitTitle] = useState('');
  const [habitCount, setHabitCount] = useState(selectedHabit?.count || 1);
  const [habitColor, setHabitColor] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const newHabit: IHabitRequest = {
      title: habitTitle,
      count: habitCount,
      color: habitColor,
    };
  
    try {
      if (isCreatingHabit) {
        console.log(newHabit)
        await dispatch(createHabitThunk(newHabit));
      } else if (isEditingHabit && selectedHabit?._id) {
        const updatedHabitInfo: IHabitUpdateRequest = {
          id: selectedHabit._id,
          ...newHabit,
        }
        await dispatch(updateHabitThunk(updatedHabitInfo));
      }
  
      dispatch(getHabitsThunk());
    } catch (error) {
      console.error('Failed to save habit:', error);
    }
  };


  return(
      <div className="habit-modal-wrapper">
          <form onSubmit={handleSubmit}>
              <HeaderView/>

              <div className="habit-modal-content-wrapper">
                <NameInputView title={habitTitle} setTitle={setHabitTitle}/>
                <CountView habitCount={habitCount} setHabitCount={setHabitCount}/>
                <ColorSelectView habitColor={habitColor} setHabitColor={setHabitColor}/>
              </div>
          </form>
      </div>
  )
}

export default HabitModal



