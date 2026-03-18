### Firebase Auth Dashboard (React + Tailwind)

A simple authentication system built with React, Firebase, and Tailwind CSS.
This project demonstrates user authentication, protected routes, and session management using localStorage with expiry (TTL).

### Features
1. Google Sign-In using Firebase Authentication
2. Protected Dashboard Route
3. User session stored in localStorage
4. Session expiry using TTL (24 hours)
5. Auto-login on page refresh (if session valid)
6. Logout functionality (clears session)
7. Clean and responsive UI using Tailwind CSS

# Authentication Flow
1. User logs in using Google Sign-In
2. Firebase returns user details
3. User data is stored in localStorage with expiry (TTL = 24 hours)
4. On refresh:
- If session is valid → user stays logged in
- If expired → user is logged out
5. Protected routes restrict access to authenticated users

# Session Management (TTL)
Custom utility functions are used to store data with an expiry time.
- Prevents permanent login
- Improves session security
- Automatically removes expired sessions

