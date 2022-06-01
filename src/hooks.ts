import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "./redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;