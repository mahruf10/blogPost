import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div>
                <button>
                    <Link href="/dashboard/analytics/monthly">Monthly</Link>
                </button>
                <button>
                    <Link href="/dashboard/analytics/weekly">Weekly</Link>
                </button>
            </div>
            {children}
        </div>
    );
};

export default layout;