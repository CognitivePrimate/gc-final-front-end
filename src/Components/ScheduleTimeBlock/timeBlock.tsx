import { ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";

// css
import "./timeBlocks.style.css";

// icons
import deleteIcon from "../../Icons/delete.svg";
import { useState } from "react";

interface Props {
    timeBlock: TimeBlock,
    onTimeBlockDelete: (timeBlock: TimeBlock) => void;

    // updateTimeBlock: (pendingTimeBlock: TimeBlock) => {}
    // onInputChange: () => void;
    // onTimeBlockTemplateRowDelete: () => void;
    // onRowDelete: (index: number, row: ScheduleRow) => void;
}

const TimeBlockItem = ({timeBlock, onTimeBlockDelete}: Props) => {

    const [pendingTimeBlock, setPendingTimeBlock] = useState<TimeBlock>({
        ...timeBlock
    })

    const handleRowDelete = (index: number, row: ScheduleRow) => {
        // finds row at specified index in array. otherwise, row always returns index 0 in this case
        // let toDelete = timeBlock.scheduleRows.indexOf(row, index);
        let newTimeBlock = pendingTimeBlock;
        let toDelete = newTimeBlock.scheduleRows.indexOf(row, index);
        console.log("index", index);
        console.log("toDelete", toDelete);
        if (index === toDelete){
            console.log("predelete", timeBlock.scheduleRows);
            // timeBlock.scheduleRows.splice(index, 1);
            newTimeBlock.scheduleRows.splice(index, 1);
            console.log("deleted", timeBlock.scheduleRows);
            // onTimeBlockTemplateRowDelete();
        }
        setPendingTimeBlock(newTimeBlock);
        // updateTimeBlock(pendingTimeBlock)
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
                        index={index}
                        onRowDelete={() => handleRowDelete(index, row)}
                        // onRowDelete={() => handleRowDelete}
                        onRowEdit={() => handleRowEdit(row)}
                        row={row}
                        onInputChangeSubmit={() => {}}      
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