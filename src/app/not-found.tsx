import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/browse"
              className="inline-block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-full transition-colors"
            >
              Browse Papers
            </Link>
            <Link 
              href="/about"
              className="inline-block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-full transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
