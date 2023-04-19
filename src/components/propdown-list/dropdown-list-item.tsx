import {FC} from "react";
import "../dropdown-list-item/list.css"
import {DropdownListItem} from "../dropdown-list-item/dropdown-list-item";

export interface IDropdownList {
    DropdownList: any
    name: any
}
export const DropDownList: FC<IDropdownList> = ({DropdownList}) => {
    return (
        <div>
            {
                Object.entries(DropdownList.NODES).map(([element, val]: any, index) =>
                    <DropdownListItem
                        DropdownList={val}
                        key={index}
                        name={element}
                    />
                )
            }
        </div>
    );
}