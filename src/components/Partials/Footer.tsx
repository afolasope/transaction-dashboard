const Footer = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-[#162C30]'>
            <div className='flex justify-between items-center'>
                <svg width='80' height='80' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <linearGradient id='blueGradient' x1='0' y1='0' x2='1' y2='1'>
                            <stop offset='0%' stopColor='#74ebd5' />
                            <stop offset='100%' stopColor='#ACB6E5' />
                        </linearGradient>
                    </defs>
                    <path
                        d='M20 20 H90 Q100 20 100 30 V40 Q100 50 90 50 H40 V65 H85 Q95 65 95 75 V85 Q95 95 85 95 H20 V20 Z'
                        fill='url(#blueGradient)'
                    />
                </svg>

                <h1 className='text-2xl font-bold text-white'>ESCROW</h1>
            </div>
            <div>
                <span className='text-white text-sm'>© 2025 ESCRO. All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;
