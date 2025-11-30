import React, { useState } from 'react';

interface EmailCopyProps {
    email: string;
    className?: string;
    children: React.ReactNode;
}

const EmailCopy: React.FC<EmailCopyProps> = ({ email, className = '', children }) => {
    const [copied, setCopied] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
        // We let the default mailto behavior proceed. 
        // If it's broken on the user's machine, at least they have the email in clipboard.
    };

    return (
        <div className="relative inline-flex flex-col items-center">
            <a
                href={`mailto:${email}`}
                onClick={handleClick}
                className={className}
            >
                {children}
            </a>

            {/* Feedback Tooltip */}
            <div
                className={`absolute bottom-full mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg shadow-xl transition-all duration-300 pointer-events-none whitespace-nowrap z-50 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
            >
                Email copied!
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
            </div>
        </div>
    );
};

export default EmailCopy;
