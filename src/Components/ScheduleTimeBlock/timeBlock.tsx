import { ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";

// css
import "./timeBlocks.style.css";

// icons
import deleteIcon from "../../Icons/delete.svg";

interface Props {
    timeBlock: TimeBlock,
    onTimeBlockDelete: (timeBlock: TimeBlock) => void;
}

const TimeBlockItem = ({timeBlock, onTimeBlockDelete}: Props) => {


    const handleRowDelete = (row: ScheduleRow) => {
        console.log("deleteIndex", row);

    }

    const handleRowEdit = (row: ScheduleRow) => {
        console.log("editIndex", row);
    }

    


    return(
        
        <main className="timeBlockContainer">
            <div className="timeBlockContainerHeaderContainer">
                <h4 className="timeBlockTimeHeader">{timeBlock.dateNeeded}</h4>
                <div className="timeBlockDateHeaderRight">
                    <h5 className="timeBlockTimeHeader">From: {timeBlock.startTime.toLocaleString("en-US")}</h5>
                    <h5 className="timeBlockTimeHeader">To: {timeBlock.endTime.toLocaleString("en-US")}</h5>
                </div>            
            </div>
            <div className="timeBlockScheduleRowContainer" >
                {timeBlock.scheduleRows.map((row, index) => 
                    <ScheduleRowComponent 
                        key={`${row}-${index}`}
                        onRowDelete={() => handleRowDelete(row)}
                        onRowEdit={() => handleRowEdit(row)}
                        row={row}             
                    />
                )}
                
            </div>
            <div className="timeBlockIconContainer">
                <img src={deleteIcon} className="trashIcon" alt="delete" onClick={() => onTimeBlockDelete(timeBlock)} />
            </div>
        </main>
    );
}




export default TimeBlockItem;