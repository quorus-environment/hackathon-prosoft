import {FC, useState} from "react";
import {IDropdownList} from "../propdown-list/dropdown-list-item";

export const DropdownListItem: FC<IDropdownList> = ({DropdownList, name}) => {
    const [expanded, setExpanded] = useState(false)
    const toggle = () => setExpanded(!expanded)

    const showItem = () => {
        let arNodes: any[] = [];
        if (DropdownList) {
            if (typeof DropdownList === "string") {
                arNodes.push(<h3 onClick={() => console.log("Вывод в канвас")}>{DropdownList}</h3>)
            }
            else if (DropdownList.length > 0) {
                DropdownList.map((element: any, index: number) => {
                    arNodes.push(<DropdownListItem DropdownList={element} name={name} key={index}/>)
                })
            }
            else {
                Object.entries(DropdownList).map(([name, element], index) => {
                    arNodes.push(<DropdownListItem DropdownList={element} name={name} key={index}/>)
                })
            }
        }

        return arNodes;
    }

    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <button
                    type="button"
                    onClick={toggle}
                >
                    +
                </button>
                <h3>{name}</h3>
            </div>
            {expanded &&
                <div className="panel-body">
                    {showItem()}
                </div>
            }
        </div>
    );
}