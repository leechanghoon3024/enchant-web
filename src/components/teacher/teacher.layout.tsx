import { ReactElement } from 'react';

interface ITeacherLayout {
    children: ReactElement | ReactElement[];
}

export const TeacherLayout = ({ children }: ITeacherLayout) => {
    return <div style={{ fontFamily: 'Dmsans, sans-serif' }}>{children}</div>;
};
