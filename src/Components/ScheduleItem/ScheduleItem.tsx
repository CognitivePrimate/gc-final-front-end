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
    onScheduleDelete: (schedule: Schedule) => void;
    onScheduleEdit: (schedule: Schedule) => void;
    // onScheduleSubmission: () => void;
}

const ScheduleItem = ({schedule, onScheduleDelete, onScheduleEdit}: Props) => {

    const handleTimeBlockDelete = (timeBlock: TimeBlock) => {
        console.log("timeblock", timeBlock)
    }
    

    return(
        <div className="scheduleItemContainer" key={`${schedule.dateNeeded}-${schedule._id}`}>
            <div className="scheduleItemHeaderContainer">
                <h5>{schedule.dateNeeded}</h5>
            </div>
            {schedule.timeBlocks.map((timeBlock, index) =>
                <TimeBlockItem
                    key={`${timeBlock.startTime}-${index}`}
                    timeBlock={timeBlock}
                    onTimeBlockDelete={()=> handleTimeBlockDelete(timeBlock)}
                />
            )}
            <div className="scheduleIconContainer">
                {schedule.templated === true && <img className="editIcon" src={editIcon} alt="edit" onClick={() => onScheduleEdit(schedule)}/>}
                <img className="trashIcon"src={deleteIcon} alt="delete" onClick={() => onScheduleDelete(schedule)}/><span>Delete Schedule Template</span>
            </div>
        </div>

    );
}


export default ScheduleItem;