import { db } from './db'
import { QUIZ_QUESTIONS, LESSONS, FLASHCARDS } from '../data/seedData'

export async function seedDatabase() {
  const existing = await db.settings.get('seeded')
  if (existing?.value) return

  await db.transaction('rw', db.questions, db.lessons, db.flashcards, db.settings, async () => {
    await db.questions.bulkAdd(QUIZ_QUESTIONS)
    await db.lessons.bulkAdd(LESSONS)
    await db.flashcards.bulkAdd(FLASHCARDS)
    await db.settings.put({ key: 'seeded', value: true })
  })
}
