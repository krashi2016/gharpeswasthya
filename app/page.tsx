import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">GharPe Swasthya</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/login"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Healthcare Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional healthcare services delivered to your home. Available 24/7 with licensed medical professionals.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Care</h3>
            <p className="text-gray-600 text-sm">Doctor visits, nursing care, and clinical services at home</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Medication</h3>
            <p className="text-gray-600 text-sm">Prescription delivery, management, and IV therapy</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnostics</h3>
            <p className="text-gray-600 text-sm">Home lab tests, monitoring, and imaging services</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🧓</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Care</h3>
            <p className="text-gray-600 text-sm">Home health aides, companionship, and daily living support</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose GharPe Swasthya?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">✅</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed Professionals</h4>
              <p className="text-gray-600">All our healthcare providers are certified and experienced</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🏠</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Home-Based Care</h4>
              <p className="text-gray-600">Receive quality healthcare in the comfort of your home</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">⏰</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600">Round-the-clock support for all your healthcare needs</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8">Join thousands of patients who trust GharPe Swasthya for their healthcare needs</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/register?type=patient"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Register as Patient
            </Link>
            <Link
              href="/register?type=provider"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Register as Provider
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 GharPe Swasthya. Professional healthcare services delivered to your home.
          </p>
        </div>
      </footer>
    </div>
  );
}
