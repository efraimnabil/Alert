import './App.css'
import Alert from './components/Alert/Alert'
import {Ban} from "lucide-react"
function App() {

  return (
    <>
      <Alert 
        type = {"alert-danger"}
        title = {"something went wrong"}
        icon = {<Ban size={24} />}
        description = "This is an alert with danger type"
      />
    </>
  )
}

export default App
