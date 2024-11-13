
import { createRoot } from 'react-dom/client'

function App() {
  return <h1>Hello from React!</h1>
}

const node = document.getElementById("root")
const root = createRoot(node)
root.render(<App />)

