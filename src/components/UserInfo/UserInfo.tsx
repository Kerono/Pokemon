import { FC, PropsWithChildren } from "react";
import { Wrapper } from "./UserInfo.components";

type Props = {} & PropsWithChildren;

export const UserInfo: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
