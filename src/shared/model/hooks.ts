import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch<AppDispatch>