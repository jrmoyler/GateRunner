import React from 'react';
import MapPinIcon from './icons/MapPinIcon';

interface RouteVisualizerProps {
  pickup: string;
  dropoff: string;
}

const RouteVisualizer: React.FC<RouteVisualizerProps> = ({ pickup, dropoff }) => {
  return (
    <div className="my-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center text-center w-1/3">
          <MapPinIcon color="#8DC63F" />
          <p className="text-xs font-semibold mt-1 text-slate-600 truncate" title={pickup}>
            {pickup}
          </p>
        </div>
        
        <div className="flex-grow mx-2 pt-2">
            <svg width="100%" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M 0 5 L 100 5" stroke="#aab1bd" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            </svg>
        </div>

        <div className="flex flex-col items-center text-center w-1/3">
          <MapPinIcon color="#0A579B" />
          <p className="text-xs font-semibold mt-1 text-slate-600 truncate" title={dropoff}>
            {dropoff}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RouteVisualizer;
