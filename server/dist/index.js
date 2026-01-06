"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// RSVP Endpoint
app.post('/api/rsvp', async (req, res) => {
    try {
        const { name, adults, kids } = req.body;
        if (!name) {
            res.status(400).json({ error: 'Name is required' });
            return;
        }
        const guest = await prisma.guest.create({
            data: {
                name,
                adults: Number(adults) || 0,
                kids: Number(kids) || 0,
            },
        });
        res.status(201).json(guest);
    }
    catch (error) {
        console.error('RSVP Error:', error);
        res.status(500).json({ error: 'Failed to submit RSVP' });
    }
});
// Guest List Endpoint (optional, for admin or checking)
app.get('/api/guests', async (req, res) => {
    try {
        const guests = await prisma.guest.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(guests);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch guests' });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    // Keep alive hack
    setInterval(() => {
        // console.log('Heartbeat');
    }, 10000);
});
