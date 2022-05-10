import React, { FC,  ReactNode } from 'react';

type Props = {
    children?: ReactNode
}

export const MainLayout: FC<Props> = ({children}) => {
    return <>{children}</>;
};

