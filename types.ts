export enum AppState {
  Booking = 'BOOKING',
  Confirmed = 'CONFIRMED',
  Tracking = 'TRACKING',
}

export interface RideDetails {
  driverName: string;
  cartNumber: string;
  etaMinutes: number;
  pickup: string;
  dropoff: string;
  adaRequired: boolean;
  adaNotes: string;
}

export interface BookingDetails {
  event: string;
  pickup: string;
  dropoff: string;
  riders: number;
  adaRequired: boolean;
  adaNotes: string;
}