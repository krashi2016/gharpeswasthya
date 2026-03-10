# GharPe Swasthya

A comprehensive home healthcare platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **User Registration**: Separate onboarding for patients and healthcare providers
- **Validation**: Aadhar card, address, phone number, PAN card verification
- **Email Verification**: Mock email verification system
- **Authentication**: Secure login system
- **Dashboard**: Comprehensive list of healthcare services including:
  - Skilled Nursing Care
  - Home Health Aide Services
  - Physical Therapy
  - Occupational Therapy
  - Speech Therapy
  - Medical Social Services
  - Palliative Care
  - Hospice Care

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Ready for Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## User Flow

1. **Home Page**: Choose to register as patient or provider
2. **Registration**: Fill out form with validation
3. **Email Verification**: Mock verification process
4. **Login**: Authenticate with email and password
5. **Dashboard**: View available healthcare services

## Deployment

Deploy to Vercel by connecting your GitHub repository or using the Vercel CLI:

```bash
npm run build
```

The app is optimized for production deployment.

## Project Structure

```
app/
├── page.tsx              # Home page with registration options
├── login/
│   └── page.tsx          # Login page
├── register/
│   ├── page.tsx          # Registration page with Suspense
│   └── RegisterForm.tsx  # Client component with form logic
└── dashboard/
    └── page.tsx          # Services dashboard
```

## Validation Rules

- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Phone**: Indian mobile number (10 digits starting with 6-9)
- **Aadhar**: 12-digit number
- **Address**: Minimum 10 characters
- **PAN**: Valid Indian PAN format (AAAAA9999A)
- **Password**: Minimum 6 characters

## Mock Authentication

The app uses localStorage for demonstration purposes. In production, integrate with a proper authentication service like NextAuth.js or Auth0.
