import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppSelector } from "../store/store";

export const useAppSelector: AppSelector = useSelector;