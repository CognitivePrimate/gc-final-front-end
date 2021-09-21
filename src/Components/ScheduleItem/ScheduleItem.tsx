import { Schedule, TimeBlock } from "../../Model/Interfaces";
import TimeBlockItem from "../ScheduleTimeBlock/timeBlock";

// icons
import deleteIcon from "../../Icons/delete.svg";
import editIcon from "../../Icons/edit.svg";
interface Props {
    schedule: Schedule,
    onScheduleDelete: (schedule: Schedule) => void;
    onScheduleEdit: (schedule: Schedule) => void;
    onScheduleSubmission: (schedule: Schedule) => void;
}

const ScheduleItem = ({schedule, onScheduleDelete, onScheduleEdit, onScheduleSubmission}: Props) => {

    const handleTimeBlockDelete = (timeBlock: TimeBlock) => {
        console.log("timeblock", timeBlock)
    }   

    return(
        <form className="scheduleItemContainer" action="submit">
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
                <img src={deleteIcon} alt="delete" onClick={() => onScheduleDelete(schedule)}/>
            </div>
            <button className="submitButton" id="scheduleTemplateSubmitButton" onClick={() => onScheduleSubmission(schedule)}>Submit Schedule Template</button>
        </form>

    );
}


export default ScheduleItem;