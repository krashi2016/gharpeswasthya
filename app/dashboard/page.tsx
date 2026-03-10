'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const services = [
  {
    category: 'Skilled Nursing Care',
    description: 'Provided by registered nurses (RNs) or licensed practical nurses (LPNs).',
    items: [
      'Wound care and dressing changes',
      'Giving injections or IV medications',
      'Monitoring blood pressure, sugar, and vital signs',
      'Managing medications',
      'Post-surgery care',
    ],
  },
  {
    category: 'Home Health Aide Services',
    description: 'Helps patients with daily living activities.',
    items: [
      'Bathing and grooming',
      'Dressing',
      'Feeding assistance',
      'Mobility help (walking, transferring)',
      'Light housekeeping',
    ],
  },
  {
    category: 'Physical Therapy',
    description: 'Helps patients regain strength and mobility after injury, surgery, or illness.',
    items: [
      'Walking training',
      'Balance exercises',
      'Strength training',
      'Fall prevention',
    ],
  },
  {
    category: 'Occupational Therapy',
    description: 'Helps patients perform everyday tasks independently.',
    items: [
      'Learning how to dress or cook after injury',
      'Training to use assistive devices',
      'Home safety recommendations',
    ],
  },
  {
    category: 'Speech Therapy',
    description: 'Helps patients with speech, communication, or swallowing problems.',
    items: [
      'Stroke recovery',
      'Neurological disorders',
      'Children with speech delays',
    ],
  },
  {
    category: 'Medical Social Services',
    description: 'Social workers help with:',
    items: [
      'Counseling and emotional support',
      'Connecting families with community resources',
      'Planning long-term care',
    ],
  },
  {
    category: 'Palliative Care',
    description: 'Focuses on comfort and quality of life for patients with serious illnesses.',
    items: [
      'Pain management',
      'Symptom control',
      'Emotional and family support',
    ],
  },
  {
    category: 'Hospice Care',
    description: 'For patients with terminal illness who are nearing end of life.',
    items: [
      'Pain and symptom relief',
      'Emotional and spiritual support',
      'Support for family members',
    ],
  },
];

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">GharPe Swasthya</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
          <p className="text-gray-600">Comprehensive healthcare services delivered to your home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.category}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}