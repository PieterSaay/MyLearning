import { db } from './db'
import { QUIZ_QUESTIONS, LESSONS, FLASHCARDS } from '../data/seedData'

// Bump this number whenever seed data changes to force a reseed
const SEED_VERSION = 2

export async function seedDatabase() {
  const existing = await db.settings.get('seeded')
  if (existing?.value === SEED_VERSION) return

  await db.transaction('rw', db.questions, db.lessons, db.flashcards, db.settings, async () => {
    await db.questions.clear()
    await db.lessons.clear()
    await db.flashcards.clear()
    await db.questions.bulkAdd(QUIZ_QUESTIONS)
    await db.lessons.bulkAdd(LESSONS)
    await db.flashcards.bulkAdd(FLASHCARDS)
    await db.settings.put({ key: 'seeded', value: SEED_VERSION })
  })
}
