const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS middleware for development
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'client/dist')));

const clientDistPath = path.join(__dirname, 'client', 'dist');

// In-memory storage for bookings
let bookings = [];

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kamundi@andrews.edu',
        pass: 'twvr oybx rajf fenw'
    }
});

// Function to send email
function sendEmail(booking) {
    // Construct email message
    let mailOptions = {
        from: 'kamundi@andrews.edu',
        to: 'benkamundi@gmail.com',
        subject: 'New Booking',
        text: `New booking details:\nName: ${booking.name}\nEmail: ${booking.email}\nPhone: ${booking.phone}\nProcedure: ${booking.procedure}\nDate: ${booking.date}\nMessage: ${booking.message}`
    };

    // Send email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    // Handle nodemailer transporter creation errors
    transporter.verify((error, success) => {
        if (error) {
            console.error('Error creating nodemailer transporter:', error);
        } else {
         console.log('Nodemailer transporter created successfully.');
        }
    });
}

fs.readFile('bookings.json', (err, data) => {
    if (err && err.code === 'ENOENT') {
        // File doesn't exist, initialize empty bookings array
        console.log('bookings.json not found, initializing empty bookings array.');
        bookings = [];
    } else if (err) {
        console.error('Error reading bookings file:', err);
    } else {
        bookings = JSON.parse(data);
    }
});

// POST route to handle bookings
app.post('/api/book', (req, res) => {
    const booking = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        procedure: req.body.procedure,
        date: req.body.date,
        message: req.body.message
    };

    bookings.push(booking);
    // res.json({ message: 'Booking successful', booking });

    fs.writeFile('bookings.json', JSON.stringify(bookings, null, 2), (err) => {
        if (err) {
            console.error('Error writing to bookings.json:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json({ message: 'Booking successful', booking });

        // Send email notification
        sendEmail(booking);
    });
});

// GET route to retrieve bookings (for testing purposes)
app.get('/api/bookings', (req, res) => {
    res.json(bookings);
});

if (fs.existsSync(clientDistPath)) {
    app.use(express.static(clientDistPath));

    app.get(/^\/(?!api\/).*/, (req, res) => {
        res.sendFile(path.join(clientDistPath, 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('React frontend not built yet. Run "npm run dev" for development or "npm run build" to build the client.');
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
