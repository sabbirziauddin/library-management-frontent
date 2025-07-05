
//hook useDispathch and useSelector hooks for redux state management      

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();