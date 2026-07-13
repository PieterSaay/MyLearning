import Dexie from 'dexie'

export const db = new Dexie('WonderLearnDB')

db.version(1).stores({
  questions:  '++id, grade, subject, type',
  lessons:    '++id, grade, subject',
  flashcards: '++id, grade, subject',
  progress:   '++id, grade, subject, activityType, [grade+subject]',
  settings:   'key',
})

db.version(2).stores({
  questions:  '++id, grade, subject, type',
  lessons:    '++id, grade, subject',
  flashcards: '++id, grade, subject',
  progress:   '++id, grade, subject, activityType, [grade+subject]',
  settings:   'key',
  mastery:    '[itemId+itemType], grade, subject, [grade+subject]',
})
