import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AtelierFurnitureApp from '../atelier-furniture-app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AtelierFurnitureApp />
  </StrictMode>,
)
