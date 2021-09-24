import { ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";

// css
import "./timeBlocks.style.css";

// icons
import deleteIcon from "../../Icons/delete.svg";
import { FormEvent, useState } from "react";

interface Props {
    timeBlock: TimeBlock,
    onTimeBlockDelete: (timeBlock: TimeBlock) => void;
    onInputChangeSubmit2: () => void;

    // updateTimeBlock: (pendingTimeBlock: TimeBlock) => {}
    // onInputChange: () => void;
    // onTimeBlockTemplateRowDelete: () => void;
    // onRowDelete: (index: number, row: ScheduleRow) => void;
}

const TimeBlockItem = ({timeBlock, onTimeBlockDelete, onInputChangeSubmit2}: Props) => {

    
    const handleRowDelete = (index: number, row: ScheduleRow) => {
        // finds row at specified index in array. otherwise, row always returns index 0 in this case
        let toDelete = timeBlock.scheduleRows.indexOf(row, index);
        console.log("index", index);
        console.log("toDelete", toDelete);
        if (index === toDelete){
            console.log("predelete", timeBlock.scheduleRows);
            timeBlock.scheduleRows.splice(index, 1);
            console.log("deleted", timeBlock.scheduleRows);
            // onTimeBlockTemplateRowDelete();
        }
        
    }

    const handleRowEdit = (row: ScheduleRow) => {
        console.log("editIndex", row);
    }



    return(
        
        <main className="timeBlockContainer">
            <div className="timeBlockContainerHeaderContainer">
                
                <div className="timeBlockDateHeaderRight">
                    <h4>Time Block: </h4>
                    <h5 className="timeBlockTimeHeader">{timeBlock.startTime.toLocaleString("en-US")}</h5>
                    <h5>to</h5>
                    <h5 className="timeBlockTimeHeader">{timeBlock.endTime.toLocaleString("en-US")}</h5>
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
                        onInputChangeSubmit={onInputChangeSubmit2}      
                    />
                )}
                
            </div>
            <div className="timeBlockIconContainer">
                {/* <img src={deleteIcon} className="trashIcon" alt="delete" onClick={() => onTimeBlockDelete(timeBlock)} /> */}
                {/* <span>Delete Time Block</span> */}
            </div>
        </main>
    );
}




export default TimeBlockItem;