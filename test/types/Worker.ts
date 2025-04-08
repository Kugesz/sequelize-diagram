import { Task } from './Task';

export type WorkerWithTask = {
    id: number;
    name: string;
    tasks: Array<Task>;
    onBreak: boolean;
};

export type Worker = {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    address: string;
    birthDate: Date;
    isActive: boolean;
    onBreak: boolean;
};

export type WorkerLogin = {
    id: number;
    name: string;
};
