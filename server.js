const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/js', express.static(path.join(__dirname, 'js')));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'css' directory
app.use('/css', express.static(path.join(__dirname, 'css')));

// Serve static files from the 'fonts' directory
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

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

// Serve the HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// GET route to retrieve bookings (for testing purposes)
app.get('/api/bookings', (req, res) => {
    res.json(bookings);
});

app.get('/gallery.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'gallery.html'));
});

app.get('/scope.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'scope.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
