
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center p-4">
      <p className="text-sm text-slate-400">&copy; {currentYear} GateRunner. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
