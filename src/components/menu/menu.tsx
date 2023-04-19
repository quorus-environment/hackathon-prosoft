import {createPortal} from "react-dom";
import {DropDownList} from "../propdown-list/dropdown-list-item";
import serv from  "../../jsons/test/res_parse_controller_3_server (2).json"
import './menu.css'

export const Menu = () => {

    return createPortal(
            <div className="menu">
                <DropDownList DropdownList={serv} name={""} />
            </div>,
        document.body,
    )
}