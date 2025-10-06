import React, { useState, useEffect } from 'react';
import { RideDetails } from '../types';
import ClockIcon from './icons/ClockIcon';
import GolfCartIcon from './icons/GolfCartIcon';
import MapPinIcon from './icons/MapPinIcon';

interface RideStatusProps {
  rideDetails: RideDetails;
  onNewRide: () => void;
}

const RideStatus: React.FC<RideStatusProps> = ({ rideDetails, onNewRide }) => {
  const [eta, setEta] = useState(rideDetails.etaMinutes);

  useEffect(() => {
    if (eta <= 0) return;
    const timer = setInterval(() => {
      setEta(prevEta => (prevEta > 0 ? prevEta - 1/60 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const displayEta = Math.ceil(eta);

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-2xl font-bold text-green-500 mb-2">Ride Confirmed!</h2>
      <p className="text-slate-500 mb-6">Your GateRunner is on the way.</p>

      <div className="bg-slate-100 rounded-lg p-4 mb-6 space-y-4">
        <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Driver:</span>
            <span className="font-bold text-slate-800">{rideDetails.driverName}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Cart #:</span>
            <span className="font-bold text-slate-800">{rideDetails.cartNumber}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">From / To:</span>
            <span className="font-bold text-slate-800">{rideDetails.pickup} → {rideDetails.dropoff}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-center items-center text-5xl font-bold text-cyan-500 mb-2">
            <ClockIcon />
            <span className="ml-3">{displayEta}</span>
            <span className="text-2xl ml-1">min</span>
        </div>
        <p className="text-slate-500">Estimated Time of Arrival</p>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-2.5 mb-8 relative overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full cart-progress-animation absolute top-0 left-0"></div>
        <div className="absolute cart-icon-animation top-1/2 -translate-y-1/2">
            <GolfCartIcon/>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2">
            <MapPinIcon color="#0A579B" />
        </div>
      </div>

      {/* Fix: Replaced unsupported `style jsx` with a standard `<style>` tag for dynamic CSS. */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes move-cart {
          from { left: 0%; }
          to { left: calc(100% - 24px); }
        }
        .cart-progress-animation {
          animation: progress ${rideDetails.etaMinutes * 60}s linear forwards;
        }
        .cart-icon-animation {
            animation: move-cart ${rideDetails.etaMinutes * 60}s linear forwards;
        }
      `}</style>


      <button
        onClick={onNewRide}
        className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-4 rounded-lg transition-colors duration-300"
      >
        Book Another Ride
      </button>
    </div>
  );
};

export default RideStatus;
