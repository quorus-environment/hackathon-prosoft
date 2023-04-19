import './app.css'
import {DropDownList} from "./components/propdown-list/dropdown-list-item";
import servJSON from "./jsons/60_controller/iec104_serv.json"

export const App = () =>  {
  return (
    <div className="app">
      <DropDownList DropdownList={servJSON} name={''}/>
    </div>
  )
}

