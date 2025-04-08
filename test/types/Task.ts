export type Task = TaskBase & {
    id: number;
    workerId?: number;
    // productId: number;
    ticketId: number;
    // pcs: number;
    deliverTo?: string;
    status: string;
    priority: number;
    time: number;
    isAssigned: boolean;
    startTime?: number;
};

export type TaskBase = {
    productId: number;
    pcs: number;
};
