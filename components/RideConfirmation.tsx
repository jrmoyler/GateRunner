import React from 'react';
import { RideDetails } from '../types';
import CheckCircleIcon from './icons/CheckCircleIcon';
import MapPinIcon from './icons/MapPinIcon';
import ClockIcon from './icons/ClockIcon';
import WheelchairIcon from './icons/WheelchairIcon';

interface RideConfirmationProps {
  rideDetails: RideDetails;
  onStartTracking: () => void;
  onNewRide: () => void;
}

const RideConfirmation: React.FC<RideConfirmationProps> = ({ rideDetails, onStartTracking, onNewRide }) => {
  return (
    <div className="text-center animate-fade-in flex flex-col items-center justify-center">
      <CheckCircleIcon />
      <h2 className="text-2xl font-bold text-green-500 mt-4">Ride Confirmed!</h2>
      <p className="text-slate-500 mt-2 mb-6">Your shuttle has been booked.</p>

      <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 space-y-3 text-left">
        <div className="flex items-start">
          <MapPinIcon color="#8DC63F" />
          <div className="ml-3">
            <h3 className="font-semibold text-slate-700">Pickup</h3>
            <p className="text-slate-600">{rideDetails.pickup}</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPinIcon color="#0A579B" />
          <div className="ml-3">
            <h3 className="font-semibold text-slate-700">Drop-off</h3>
            <p className="text-slate-600">{rideDetails.dropoff}</p>
          </div>
        </div>
        <div className="flex items-start">
          <ClockIcon size={20} />
          <div className="ml-3">
            <h3 className="font-semibold text-slate-700">Estimated Arrival</h3>
            <p className="text-slate-600">{rideDetails.etaMinutes} minutes</p>
          </div>
        </div>
        {rideDetails.adaRequired && (
            <div className="flex items-start pt-2 border-t border-slate-200">
                <WheelchairIcon />
                <div className="ml-3">
                    <h3 className="font-semibold text-slate-700">Accessibility</h3>
                    <p className="text-slate-600">ADA Vehicle Requested</p>
                    {rideDetails.adaNotes && (
                        <p className="text-sm text-slate-500 mt-1 italic">
                           Note: "{rideDetails.adaNotes}"
                        </p>
                    )}
                </div>
            </div>
        )}
      </div>

      <button
        onClick={onStartTracking}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 mb-3"
      >
        Track Your Ride
      </button>

      <button
        onClick={onNewRide}
        className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-4 rounded-lg transition-colors duration-300"
      >
        Book Another Ride
      </button>
    </div>
  );
};

export default RideConfirmation;