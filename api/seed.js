import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Wedding from './models/Wedding.js';

dotenv.config();

const weddingData = {
    id: "raouia-islem",
    bride: "Raouia",
    groom: "Islem",
    date: "2026-05-03T17:00:00",
    maxGuests: 200,
    confirmedGuests: 0,
    theme: "theme2"
};

async function seed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wedding-platform');
        console.log('Connected to MongoDB');

        const existing = await Wedding.findOne({ id: weddingData.id });
        if (existing) {
            console.log('Wedding already exists, updating...');
            await Wedding.findOneAndUpdate({ id: weddingData.id }, weddingData);
        } else {
            await Wedding.create(weddingData);
            console.log('Wedding created successfully');
        }

        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seed();
