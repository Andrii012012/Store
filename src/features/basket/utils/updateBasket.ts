import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { getBasketThunk } from "../basket";
import { getBasketURL } from "../../../config/config";
import { TStatusReducer } from "../../../interfaces/statusReducer";
import { RootState } from "../../../store/store";

interface IProps {
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>;
  id: string;
  status: TStatusReducer;
}

export default function renderState(props: IProps): void {
  let { dispatch, id, status } = props;

  if (status === "success" && id) {
    const form = new FormData();
    form.append("id", id);
    dispatch(getBasketThunk({ url: getBasketURL, form }));
  }
}
