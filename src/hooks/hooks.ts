import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/types'
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector


/// Use throughout your app instead of plain `const dispatch = `useAppDispatch()`
export const useActionCreators = (actions: ActionCreatorsMapObject) => {
    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(actions, dispatch), [])
}