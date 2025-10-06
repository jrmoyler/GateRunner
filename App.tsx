import React, { useState, useCallback } from 'react';
import { AppState, RideDetails, BookingDetails } from './types';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import RideStatus from './components/RideStatus';
import Footer from './components/Footer';
import RideConfirmation from './components/RideConfirmation';

const getEta = (pickup: string, dropoff: string): number => {
    const estimates: Record<string, Record<string, number>> = {
        'Lot A': { 'Gate 1 (VIP)': 5, 'Gate 4': 6, 'Gate 7': 8, 'Main Entrance': 7 },
        'Lot B': { 'Gate 1 (VIP)': 7, 'Gate 4': 6, 'Gate 7': 5, 'Main Entrance': 6 },
        'Lot C': { 'Gate 1 (VIP)': 9, 'Gate 4': 8, 'Gate 7': 7, 'Main Entrance': 8 },
        'Remote Parking Zone': { 'Gate 1 (VIP)': 15, 'Gate 4': 14, 'Gate 7': 12, 'Main Entrance': 13 },
    };
    // Add some minor random variation
    const baseEta = estimates[pickup]?.[dropoff] ?? 8;
    const finalEta = baseEta + Math.floor(Math.random() * 3) - 1; // +/- 1 minute variation
    return Math.max(3, finalEta); // Ensure ETA is at least 3 minutes
};

const DRIVERS = ['Mike', 'Jessica', 'Tom', 'Linda'];

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.Booking);
  const [rideDetails, setRideDetails] = useState<RideDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBooking = useCallback((bookingDetails: BookingDetails) => {
    setIsLoading(true);
    // Simulate API call to book a ride and process payment
    setTimeout(() => {
      const newRideDetails: RideDetails = {
        driverName: DRIVERS[Math.floor(Math.random() * DRIVERS.length)],
        cartNumber: (Math.floor(Math.random() * 20) + 1).toString(),
        etaMinutes: getEta(bookingDetails.pickup, bookingDetails.dropoff),
        pickup: bookingDetails.pickup,
        dropoff: bookingDetails.dropoff,
        adaRequired: bookingDetails.adaRequired,
        adaNotes: bookingDetails.adaNotes,
      };
      setRideDetails(newRideDetails);
      setAppState(AppState.Confirmed);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleNewRide = useCallback(() => {
    setAppState(AppState.Booking);
    setRideDetails(null);
  }, []);

  const handleStartTracking = useCallback(() => {
    setAppState(AppState.Tracking);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-between text-slate-800">
      <Header />
      <main className="w-full max-w-md mx-auto p-4 flex-grow flex items-center">
        <div className="w-full bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-500">
          {appState === AppState.Booking && (
            <BookingForm 
              onBookRide={handleBooking} 
              isLoading={isLoading} 
            />
          )}
          {appState === AppState.Confirmed && rideDetails && (
             <RideConfirmation
              rideDetails={rideDetails}
              onStartTracking={handleStartTracking}
              onNewRide={handleNewRide}
            />
          )}
          {appState === AppState.Tracking && rideDetails && (
            <RideStatus 
              rideDetails={rideDetails}
              onNewRide={handleNewRide}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;