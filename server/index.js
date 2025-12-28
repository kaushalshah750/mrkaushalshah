require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_db')
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// --- SCHEMAS ---

const ProjectSchema = new mongoose.Schema({
    title: String,
    slug: { type: String, unique: true },
    tagline: String,
    description: String, // Stores HTML
    img: String,
    githubUrl: String,
    liveUrl: String,
    isFeatured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    technologies: [{
        name: String,
        type: { type: String, enum: ['frontend', 'backend', 'database', 'devops', 'ai'] }
    }]
});

const LeadSchema = new mongoose.Schema({
    agencyName: String,
    email: String,
    status: { type: String, default: 'New' },
    createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', ProjectSchema);
const Lead = mongoose.model('Lead', LeadSchema);

// --- API ROUTES ---

// 1. Get All Projects (Sorted by Order)
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ order: 1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. Get Single Project by Slug
app.get('/api/projects/:slug', async (req, res) => {
    try {
        const project = await Project.findOne({ slug: req.params.slug });
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. Admin: Add Project (Postman se hit karne ke liye)
app.post('/api/projects', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Hunter Bot: Save Lead (Bot yaha data bhejega)
app.post('/api/leads', async (req, res) => {
    try {
        const lead = new Lead(req.body);
        await lead.save();
        res.json({ message: 'Lead Saved' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});