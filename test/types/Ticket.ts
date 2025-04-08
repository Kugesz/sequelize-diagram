type Ticket = {
    id: number;
    buyerId: number;
    address: string;
    ETA: number;
    pickupTime?: Date;
    bayNumber?: string;
    isAssigned: boolean;
};

export default Ticket;
