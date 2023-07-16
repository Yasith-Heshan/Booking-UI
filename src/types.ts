export type Resource = {
    id: string;
    name: string;
    count: number;
}

export type Booking = {
    ResourceName: string;
    reason?: string;
    bookingDate: any;
    bookingStartTime: any;
    bookingEndTime: any;
    occupants: number;
}

export type User = {
    username: string;
}

export type BookingForm = {
    username?: string,
    resourceId?: number,
    reason?: string,
    count?: number,
    startDateTime?: string,
    endDateTime?: string,
    ResourceName?: string,
    bookingDate?: any,
    bookingEndTime?: any,
    bookingStartTime?: any,
    occupants?: string,
}
