import { Schedule, ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import TimeBlockItem from "../ScheduleTimeBlock/timeBlock";

// icons
import deleteIcon from "../../Icons/delete.svg";
import editIcon from "../../Icons/edit.svg";

// css
import "./schedule-item.styles.css";
import { addSchedule } from "../../services";
import { FormEvent, useState } from "react";
interface Props {
    schedule: Schedule,
    onScheduleDelete: () => void;
    onScheduleEdit: () => void;
    onRowDeleteThree: (index: number, timeBlock: TimeBlock, schedule: Schedule) => void;
    // onInputChange: () => void;
    onInputChangeSubmit3: () => void;
    onTimeBlockDeleteTwo: (index: number) => void; 
    // onScheduleSubmission: () => void;
    // onTimeBlockRowReset: () => void;
}

const ScheduleItem = ({schedule, onScheduleDelete, onScheduleEdit, onInputChangeSubmit3, onRowDeleteThree, onTimeBlockDeleteTwo}: Props) => {
    const [timeBlockIndex, setTimeBlockIndex] = useState<number>()

    // finds  correct index of timeblock where delete icon was clicked, to pass up to schedule creation for rerender and deletion of entire timeblock component
    const handleTimeBlockDelete = (index: number, timeBlock: TimeBlock, schedule:Schedule) => {
        let timeBlockToDelete = schedule.timeBlocks.indexOf(timeBlock, index);
        console.log("timeBlockInded", index);
        console.log("timeblock", timeBlockToDelete);
        if (index === timeBlockToDelete){
            console.log("preTbDel", schedule.timeBlocks);
            schedule.timeBlocks.splice(index, 1);

        }
        onTimeBlockDeleteTwo(index);
    }

    // to delete row from sched template TAKE IN SCHEDULE FOR SCHED.TIMEBLOCKS.IND
    const handleTimeBlockIndexRowDelete = (schedule: Schedule, timeBlock: TimeBlock, index: number,) => {
        // finds row at specified index in array. otherwise, row always returns index 0 in this case
        let TimeBlocktoDeleteFrom = schedule.timeBlocks.indexOf(timeBlock, index);
        console.log("Tbindex", index);
        console.log("TimeBlocktoDeleteFrom", TimeBlocktoDeleteFrom);
        if (index === TimeBlocktoDeleteFrom){
            console.log("predelete", schedule.timeBlocks);
            // schedule.timeBlocks.splice(index, 1);
            setTimeBlockIndex(index)
            console.log("timeBIndex", timeBlockIndex);
            console.log("deleted", timeBlock.scheduleRows);
            // onTimeBlockTemplateRowDelete();
        }
        onRowDeleteThree(index, timeBlock, schedule);
    }
    
    

    return(
        <div className="scheduleItemContainer" key={`${schedule.dateNeeded}-${schedule._id}`}>
            <div className="scheduleItemHeaderContainer">
                <h4>Schedule Date: {schedule.dateNeeded}</h4>
            </div>
            {schedule.timeBlocks.map((timeBlock, index) =>
                <TimeBlockItem
                    key={`${timeBlock.startTime}-${index}`}
                    timeBlock={timeBlock}
                    onTimeBlockDelete={()=> handleTimeBlockDelete(index, timeBlock, schedule)}
                    onInputChangeSubmit2={onInputChangeSubmit3}
                    onRowDeleteTwo={() => handleTimeBlockIndexRowDelete(schedule, timeBlock, index)}
                    // updateTimeBlock={(pendingTimeblock) => {}}
                />
            )}
            <div className="scheduleIconContainer">
                {schedule.templated === true && <><img className="editIcon" src={editIcon} alt="edit" onClick={() => onScheduleEdit}/><span>Edit Schedule Template</span> </>}
                {schedule.templated === false && <><img className="trashIcon"src={deleteIcon} alt="delete" onClick={onScheduleDelete}/><span>Delete Schedule Template</span></>}
            </div>
        </div>

    );
}


export default ScheduleItem;