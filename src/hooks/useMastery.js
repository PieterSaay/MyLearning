import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db/db'

export function useGradeMastery(grade) {
  return useLiveQuery(
    () => db.mastery.where('grade').equals(Number(grade)).toArray(),
    [grade], []
  )
}

export function useSubjectMastery(grade, subject) {
  return useLiveQuery(
    () => db.mastery.where('[grade+subject]').equals([Number(grade), subject]).toArray(),
    [grade, subject], []
  )
}

export async function recordAttempt(itemId, itemType, grade, subject, correct) {
  const existing = await db.mastery.get([itemId, itemType])
  await db.mastery.put({
    itemId,
    itemType,
    grade: Number(grade),
    subject,
    attempts: (existing?.attempts ?? 0) + 1,
    correct: (existing?.correct ?? 0) + (correct ? 1 : 0),
    lastSeen: Date.now(),
  })
}
