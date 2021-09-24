import { Schedule, TimeBlock } from "../../Model/Interfaces";
import TimeBlockItem from "../ScheduleTimeBlock/timeBlock";

// icons
import deleteIcon from "../../Icons/delete.svg";
import editIcon from "../../Icons/edit.svg";

// css
import "./schedule-item.styles.css";
import { addSchedule } from "../../services";
import { FormEvent } from "react";
interface Props {
    schedule: Schedule,
    onScheduleDelete: () => void;
    onScheduleEdit: () => void;
    // onInputChange: () => void;
    onInputChangeSubmit3: () => void;
    // onScheduleSubmission: () => void;
    // onTimeBlockRowReset: () => void;
}

const ScheduleItem = ({schedule, onScheduleDelete, onScheduleEdit, onInputChangeSubmit3}: Props) => {

    const handleTimeBlockDelete = (timeBlock: TimeBlock) => {
        console.log("timeblock", timeBlock)
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
                    onTimeBlockDelete={()=> handleTimeBlockDelete(timeBlock)}
                    onInputChangeSubmit2={onInputChangeSubmit3}
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