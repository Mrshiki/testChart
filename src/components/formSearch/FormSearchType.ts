import {Dispatch, SetStateAction} from "react";

export type FormSearchProps = {
  handleSubmit: (e: { preventDefault: () => void }) => Promise<void>;
  setUserName: Dispatch<SetStateAction<string>>;
};
