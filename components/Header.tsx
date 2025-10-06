
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex flex-col items-center select-none">
    <div className="relative mb-2">
      <svg width="120" height="60" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M116.5 60.5C116.5 63.8137 113.814 66.5 110.5 66.5C107.186 66.5 104.5 63.8137 104.5 60.5C104.5 57.1863 107.186 54.5 110.5 54.5C113.814 54.5 116.5 57.1863 116.5 60.5Z" stroke="#0A579B" strokeWidth="5"/>
        <path d="M190.5 60.5C190.5 63.8137 187.814 66.5 184.5 66.5C181.186 66.5 178.5 63.8137 178.5 60.5C178.5 57.1863 181.186 54.5 184.5 54.5C187.814 54.5 190.5 57.1863 190.5 60.5Z" stroke="#0A579B" strokeWidth="5"/>
        <path d="M152.923 21.3213L161.464 12H200V49.9999H114.28L110.51 40.0152H141.527L152.923 21.3213Z" fill="url(#paint0_linear_1)"/>
        <path d="M100 50H207V57H100V50Z" fill="url(#paint1_linear_1)"/>
        <path d="M96 26H115L119 39H91L96 26Z" fill="url(#paint2_linear_1)"/>
        <path d="M141.222 40L109.805 40L114.5 50L186.208 50L199.309 29.5693L157.062 29.5693L141.222 40Z" fill="url(#paint3_linear_1)"/>
        <path d="M102 31L87.5 31" stroke="#0A579B" strokeWidth="5" strokeLinecap="round"/>
        <path d="M98 38L79.5 38" stroke="#0A579B" strokeWidth="5" strokeLinecap="round"/>
        <path d="M124.965 29.5L120.477 39.814C121.738 41.5435 124.167 42.1932 126.241 41.258L124.965 29.5Z" fill="#8DC63F"/>
        <path d="M126.241 41.2581L139.734 35.1328L129.566 23.3642L124.965 29.5001C122.95 24.1843 115.823 23.5186 112.553 28.1691L126.241 41.2581Z" fill="#8DC6fluid-3-fill"/>
        <defs>
            <linearGradient id="paint0_linear_1" x1="157.25" y1="12" x2="157.25" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#27AAE1"/><stop offset="1" stopColor="#0A579B"/></linearGradient>
            <linearGradient id="paint1_linear_1" x1="153.5" y1="50" x2="153.5" y2="57" gradientUnits="userSpaceOnUse"><stop stopColor="#27AAE1"/><stop offset="1" stopColor="#0A579B"/></linearGradient>
            <linearGradient id="paint2_linear_1" x1="105" y1="26" x2="105" y2="39" gradientUnits="userSpaceOnUse"><stop stopColor="#27AAE1"/><stop offset="1" stopColor="#0A579B"/></linearGradient>
            <linearGradient id="paint3_linear_1" x1="154.557" y1="29.5693" x2="154.557" y2="50" gradientUnits="userSpaceOnUse"><stop stopColor="#27AAE1"/><stop offset="1" stopColor="#0A579B"/></linearGradient>
            <linearGradient id="paint_arrow_gradient" x1="126" y1="23" x2="126" y2="41" gradientUnits="userSpaceOnUse"><stop stopColor="#93D337"/><stop offset="1" stopColor="#67A83E"/></linearGradient>
        </defs>
        <g fill="url(#paint_arrow_gradient)">
          <path d="M124.965 29.5L120.477 39.814C121.738 41.5435 124.167 42.1932 126.241 41.258L124.965 29.5Z"/>
          <path d="M126.241 41.2581L139.734 35.1328L129.566 23.3642L124.965 29.5001C122.95 24.1843 115.823 23.5186 112.553 28.1691L126.241 41.2581Z"/>
        </g>
      </svg>
    </div>
    <div className="text-3xl font-bold tracking-tight">
      <span style={{color: '#0A579B'}}>Gate</span><span style={{color: '#8DC63F'}}>Runner</span>
    </div>
    <div className="relative mt-2">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500"></span>
      </div>
    </div>
    <div className="relative -mt-1">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-1 px-8 rounded-md shadow-md text-center text-sm"
           style={{
             clipPath: 'polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)'
           }}>
        Your hometown ride to big-time events.
      </div>
      <div className="absolute -left-4 -bottom-2 w-0 h-0"
           style={{
             borderTop: '10px solid transparent',
             borderBottom: '10px solid transparent',
             borderRight: '10px solid #8DC63F',
             transform: 'rotate(-45deg)'
           }}></div>
      <div className="absolute -right-4 -bottom-2 w-0 h-0"
           style={{
             borderTop: '10px solid transparent',
             borderBottom: '10px solid transparent',
             borderLeft: '10px solid #8DC63F',
             transform: 'rotate(45deg)'
           }}></div>
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="w-full p-6 flex justify-center items-center">
      <Logo />
    </header>
  );
};

export default Header;
