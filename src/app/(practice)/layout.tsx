import Link from 'next/link';
import React from 'react';

const PracticeLayout = ({ children,salesSlot,marketingSlot }: { children: React.ReactNode; salesSlot: React.ReactNode; marketingSlot: React.ReactNode }) => {
    return (
        <div className="p-5">
            <nav>
                <ul className='flex gap-4'>
                    <li><Link href="/development">Development</Link></li>
                    <li><Link href="/marketing">Marketing</Link></li>
                    <li><Link href="/marketing/settings">Settings</Link></li>
                    <li><Link href="/sales">Sales</Link></li>
                    <li><Link href="/test">Test</Link></li>
                        
                </ul>
            </nav>
   <div className='flex gap-4'> 
      {marketingSlot}
      {salesSlot}
           
   </div>
            {children}
          
        </div>
    );
};

export default PracticeLayout;