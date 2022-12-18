import { FC, PropsWithChildren } from 'react';

type Props = Record<string, unknown>;

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => <>{children}</>;
