import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db/db'

export function useProgress(grade, subject) {
  const records = useLiveQuery(
    () => grade && subject
      ? db.progress.where({ grade, subject }).toArray()
      : Promise.resolve([]),
    [grade, subject],
    []
  )

  const save = async (activityType, score, total) => {
    await db.progress.add({ grade, subject, activityType, score, total, completedAt: Date.now() })
  }

  const bestScore = records?.reduce((best, r) => Math.max(best, r.score ?? 0), 0) ?? 0

  return { records: records ?? [], save, bestScore }
}
