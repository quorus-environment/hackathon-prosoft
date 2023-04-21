import {createPortal} from "react-dom";
import {DropDownList} from "../propdown-list/dropdown-list-item";
import './menu.css'
import menu from "../../jsons/index.json"

export const Menu = () => {
    // getForwardStepForServ()
    return createPortal(
            <div className="menu">
                <DropDownList DropdownList={menu} name={""} />
            </div>,
        document.body,
    )
}