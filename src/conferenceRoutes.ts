import express from 'express';
import { Conference } from './models/Conference';
import { AppDataSource } from './data-source';

const router = express.Router();

// GET all conferences
router.get('/', async (req, res) => {
  const conferenceRepository = AppDataSource.getRepository(Conference);
  const conferences = await conferenceRepository.find();
  res.json(conferences);
});

// POST a new conference
router.post('/', async (req, res) => {
  const conferenceRepository = AppDataSource.getRepository(Conference);
  const conference = conferenceRepository.create(req.body);
  await conferenceRepository.save(conference);
  res.json(conference);
});

// GET a single conference by ID
router.get('/:id', async (req, res) => {
  const conferenceRepository = AppDataSource.getRepository(Conference);
  const conferenceId = parseInt(req.params.id, 10);

  if (isNaN(conferenceId)) {
    return res.status(400).json({ error: 'Invalid conference ID' });
  }

  const conference = await conferenceRepository.findOne({ where: { id: conferenceId } });

  if (!conference) {
    return res.status(404).json({ error: 'Conference not found' });
  }

  res.json(conference);
});

// PUT (update) a conference by ID
router.put('/:id', async (req, res) => {
  const conferenceRepository = AppDataSource.getRepository(Conference);
  const conferenceId = parseInt(req.params.id, 10);

  if (isNaN(conferenceId)) {
    return res.status(400).json({ error: 'Invalid conference ID' });
  }

  const conference = await conferenceRepository.findOne({ where: { id: conferenceId } });

  if (!conference) {
    return res.status(404).json({ error: 'Conference not found' });
  }

  conferenceRepository.merge(conference, req.body);
  await conferenceRepository.save(conference);
  res.json(conference);
});

// DELETE a conference by ID
router.delete('/:id', async (req, res) => {
  const conferenceRepository = AppDataSource.getRepository(Conference);
  const conferenceId = parseInt(req.params.id, 10);

  if (isNaN(conferenceId)) {
    return res.status(400).json({ error: 'Invalid conference ID' });
  }

  const conference = await conferenceRepository.findOne({ where: { id: conferenceId } });

  if (!conference) {
    return res.status(404).json({ error: 'Conference not found' });
  }

  await conferenceRepository.remove(conference);
  res.json({ message: 'Conference deleted successfully' });
});

export default router;