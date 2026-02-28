import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Wedding from './models/Wedding.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wedding-platform')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/weddings', async (req, res) => {
    try {
        const weddings = await Wedding.find();
        const weddingMap = {};
        weddings.forEach(w => weddingMap[w.id] = w);
        res.json(weddingMap);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/weddings/:id', async (req, res) => {
    try {
        const wedding = await Wedding.findOne({ id: req.params.id });
        if (!wedding) return res.status(404).json({ message: 'Wedding not found' });
        res.json(wedding);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/weddings', async (req, res) => {
    try {
        const existing = await Wedding.findOne({ id: req.body.id });
        if (existing) return res.status(400).json({ message: 'ID already exists' });

        const newWedding = new Wedding(req.body);
        await newWedding.save();
        res.status(201).json(newWedding);
    } catch (error) {
        console.error("POST Error:", error);
        res.status(400).json({ message: error.message });
    }
});

app.put('/api/weddings/:id', async (req, res) => {
    try {
        const updatedWedding = await Wedding.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedWedding) return res.status(404).json({ message: 'Wedding not found' });
        res.json(updatedWedding);
    } catch (error) {
        console.error("PUT Error:", error);
        res.status(400).json({ message: error.message });
    }
});

app.post('/api/weddings/:id/rsvp', async (req, res) => {
    try {
        const { guestCount } = req.body;

        if (!guestCount || guestCount < 1) {
            return res.status(400).json({ message: 'Invalid guest count' });
        }

        const wedding = await Wedding.findOne({ id: req.params.id });
        if (!wedding) return res.status(404).json({ message: 'Wedding not found' });

        if (wedding.confirmedGuests + guestCount > wedding.maxGuests) {
            return res.status(400).json({ message: 'Not enough seats available' });
        }

        wedding.confirmedGuests += guestCount;
        await wedding.save();

        res.json({ message: 'RSVP successful', confirmedGuests: wedding.confirmedGuests, maxGuests: wedding.maxGuests });
    } catch (error) {
        console.error("RSVP Error:", error);
        res.status(500).json({ message: error.message });
    }
});


app.delete('/api/weddings/:id', async (req, res) => {
    try {
        const deletedWedding = await Wedding.findOneAndDelete({ id: req.params.id });
        if (!deletedWedding) return res.status(404).json({ message: 'Wedding not found' });
        res.json({ message: 'Wedding deleted successfully' });
    } catch (error) {
        console.error("DELETE Error:", error);
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
