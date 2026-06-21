# Doctor Reuben Kamundi - Portfolio Website (React Version)

A modern, responsive portfolio website for Dr. Reuben Kamundi built with React, featuring appointment booking, service listings, and gallery sections.

## Tech Stack

### Frontend
- **React 19** - UI library
- **React Router** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Express.js** - Web server
- **Nodemailer** - Email notifications
- **Body-parser** - Request parsing

## Project Structure

```
Doctor-Portfolio-main/
├── client/                    # React frontend
│   ├── public/               # Static assets (images, CSS, fonts)
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── layout/      # Navbar, Footer
│   │   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   │   └── ui/          # Reusable UI components
│   │   ├── pages/           # Route pages (Home, Gallery, etc.)
│   │   ├── constants/       # Data constants and content
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
├── server.js                 # Express backend server
├── package.json              # Root package.json
└── bookings.json            # Booking data storage
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dkamundi/Doctor-Portfolio-main.git
   cd Doctor-Portfolio-main
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

## Running the Application

### Development Mode

Run both frontend and backend concurrently:

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:3000`
- React dev server on `http://localhost:5173`

The Vite dev server will proxy API requests to the backend automatically.

### Alternative: Run Separately

**Backend only:**
```bash
npm run dev:server
```

**Frontend only:**
```bash
npm run dev:client
```

### Production Mode

1. **Build the React app**
   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

The server will serve the built React app from `http://localhost:3000`

## Features

### Pages
- **Home** - Hero carousel, about section, procedures, mission/vision, booking form
- **Gallery** - Image archive
- **Scope** - Detailed service descriptions
- **Livia MediSpa** - Medical spa information

### Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dynamic routing with React Router
- ✅ Booking form with email notifications
- ✅ Data management through constants
- ✅ Bootstrap carousel integration
- ✅ Contact form submission
- ✅ Social media links
- ✅ Image galleries

## Configuration

### Email Setup
Update email credentials in `server.js`:
```javascript
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});
```

### Content Updates
Edit content in `client/src/constants/data.js`:
- Site information
- Doctor background
- Procedures list
- Mission/vision statements
- Social media links
- Contact information

## API Endpoints

- `POST /api/book` - Submit booking request
- `GET /api/bookings` - Retrieve all bookings (for admin)

## Deployment

### Vercel (Recommended for full-stack)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Other Platforms
1. Build the client: `npm run build`
2. Deploy the entire project folder
3. Set environment variables if needed
4. Ensure Node.js is available on the hosting platform

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
ISC

## Author
David Kamundi - [Portfolio](https://davidkamundi.vercel.app)

## Support
For issues or questions, contact: benkamundi@gmail.com