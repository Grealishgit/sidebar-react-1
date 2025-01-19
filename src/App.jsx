import { useState } from 'react'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'

function App() {
  const [isOpen, setIsOpen] = useState(true);
  

  return (
    <>
      <div className="h-screen flex bg-[#F3F5F7] px-3 py-4">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MainContent />
      </div>
    </>
  ) 
}

export default App
