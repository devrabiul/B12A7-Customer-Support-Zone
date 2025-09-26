import './App.css'
import Banners from './components/Banner/Banners'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Navbar from './components/Navbar/Navbar'
import TaskStatusSection from './components/TaskStatusSection/TaskStatusSection'

function App() {

  return (
    <>
      <Navbar />
      <Banners />

      <div className="container mx-auto px-[1rem]">
        <div className="grid grid-cols-12 gap-[32px]">
          <div className="col-span-9">
            <CustomerTickets />
          </div>
          <div className="col-span-3">
            <TaskStatusSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
