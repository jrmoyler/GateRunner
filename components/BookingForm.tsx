import React, { useState } from 'react';
import { BookingDetails } from '../types';
import MapPinIcon from './icons/MapPinIcon';
import UsersIcon from './icons/UsersIcon';
import CalendarIcon from './icons/CalendarIcon';
import CreditCardIcon from './icons/CreditCardIcon';
import LockIcon from './icons/LockIcon';
import RouteVisualizer from './RouteVisualizer';
import WheelchairIcon from './icons/WheelchairIcon';

interface BookingFormProps {
  onBookRide: (details: BookingDetails) => void;
  isLoading: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ onBookRide, isLoading }) => {
  const [details, setDetails] = useState<BookingDetails>({
    event: 'Pro Football Game',
    pickup: 'Lot C',
    dropoff: 'Gate 4',
    riders: 1,
    adaRequired: false,
    adaNotes: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '**** **** **** 1234',
    expiryDate: '12/26',
    cvv: '123',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setDetails(prev => ({
            ...prev,
            [name]: checked,
            // Clear notes if ADA is not required
            adaNotes: !checked ? '' : prev.adaNotes,
        }));
    } else {
        setDetails(prev => ({
            ...prev,
            [name]: name === 'riders' ? parseInt(value, 10) : value,
        }));
    }
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookRide(details);
  };

  const InputField: React.FC<{
    id: string;
    label: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    className?: string;
  }> = ({ id, label, icon, children, className }) => (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-1 text-slate-800">Find a Ride</h2>
      <p className="text-center text-slate-500 mb-6">Enter your details to get a shuttle.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField id="event" label="Event" icon={<CalendarIcon />}>
          <select
            id="event"
            name="event"
            value={details.event}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none"
          >
            <option>Pro Football Game</option>
            <option>Summer Concert Series</option>
            <option>College Championship</option>
          </select>
        </InputField>

        <InputField id="pickup" label="Pickup Location" icon={<MapPinIcon color="#8DC63F" />}>
          <select
            id="pickup"
            name="pickup"
            value={details.pickup}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none"
          >
            <option>Lot A</option>
            <option>Lot B</option>
            <option>Lot C</option>
            <option>Remote Parking Zone</option>
          </select>
        </InputField>

        <InputField id="dropoff" label="Drop-off Gate" icon={<MapPinIcon color="#0A579B" />}>
          <select
            id="dropoff"
            name="dropoff"
            value={details.dropoff}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none"
          >
            <option>Gate 1 (VIP)</option>
            <option>Gate 4</option>
            <option>Gate 7</option>
            <option>Main Entrance</option>
          </select>
        </InputField>

        <RouteVisualizer pickup={details.pickup} dropoff={details.dropoff} />

        <InputField id="riders" label="Number of Riders" icon={<UsersIcon />}>
          <input
            type="number"
            id="riders"
            name="riders"
            min="1"
            max="6"
            value={details.riders}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
          />
        </InputField>

        <div className="pt-2 space-y-3">
            <h3 className="text-lg font-semibold text-slate-700">Accessibility Needs</h3>
            <div className="flex items-center p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <input
                    id="adaRequired"
                    name="adaRequired"
                    type="checkbox"
                    checked={details.adaRequired}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                />
                <label htmlFor="adaRequired" className="ml-3 block text-sm font-medium text-slate-700">
                    Require ADA-accessible vehicle?
                </label>
            </div>
            {details.adaRequired && (
                <div className="animate-fade-in">
                    <label htmlFor="adaNotes" className="block text-sm font-medium text-slate-600 mb-1">Specific needs (optional)</label>
                    <textarea
                        id="adaNotes"
                        name="adaNotes"
                        rows={3}
                        value={details.adaNotes}
                        onChange={handleChange}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="e.g., wheelchair space, assistance boarding"
                    ></textarea>
                </div>
            )}
        </div>

        <div className="pt-2">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Payment Details</h3>
            <p className="text-sm text-slate-500 mb-4">A temporary hold will be placed on your card.</p>
            
            <InputField id="cardNumber" label="Card Number" icon={<CreditCardIcon />}>
                <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentChange}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    placeholder="0000 0000 0000 0000"
                />
            </InputField>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
                <InputField id="expiryDate" label="Expiry" icon={<CalendarIcon />}>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handlePaymentChange}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="MM/YY"
                    />
                </InputField>
                <InputField id="cvv" label="CVV" icon={<LockIcon />}>
                     <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handlePaymentChange}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="123"
                    />
                </InputField>
            </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-400 to-lime-500 hover:from-green-500 hover:to-lime-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            `Confirm & Pay $${details.riders * 10}`
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;