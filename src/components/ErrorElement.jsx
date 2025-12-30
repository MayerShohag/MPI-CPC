const ErrorElement = ({ message, onRetry }) => {
     return (
          <div className="flex flex-col items-center justify-center p-6 bg-red-100 border border-red-400 rounded-lg max-w-sm mx-auto mt-10">
               <svg
                    className="w-12 h-12 text-red-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
               >
                    <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
               </svg>
               <h2 className="text-red-800 text-lg font-semibold mb-2">
                    Oops! Something went wrong.
               </h2>
               <p className="text-red-700 mb-4 text-center">
                    {message || "Please try again later."}
               </p>
               {onRetry && (
                    <button
                         onClick={onRetry}
                         className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                         Retry
                    </button>
               )}
          </div>
     );
};

export default ErrorElement;
