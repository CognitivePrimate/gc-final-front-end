import { ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";

// css
import "./timeBlocks.style.css";

// icons
import deleteIcon from "../../Icons/delete.svg";
interface Props {
    timeBlock: TimeBlock,
    onTimeBlockDelete: (timeBlock: TimeBlock) => void;
    onInputChangeSubmit2: () => void;
    onRowDeleteTwo: (index: number, timeBlock: TimeBlock) => void;
}

const TimeBlockItem = ({timeBlock, onTimeBlockDelete, onInputChangeSubmit2, onRowDeleteTwo}: Props) => {


    // to find TimeBlock index to delete row from sched template in sched creation component
    const handleRowDelete = (index: number, row: ScheduleRow) => {
        // finds row at specified index in array. otherwise, row always returns index 0 in this case
        let toDelete = timeBlock.scheduleRows.indexOf(row, index);
        if (index === toDelete){
            timeBlock.scheduleRows.splice(index, 1);
        }
        
        onRowDeleteTwo(index, timeBlock);
    }

    const handleRowEdit = (row: ScheduleRow) => {
        console.log("editIndex", row);
    }


    return(
        
        <main className="timeBlockContainer">
            <div className="timeBlockContainerHeaderContainer">
                
                <div className="timeBlockDateHeaderRight">
                    <h4>Time Block: </h4>
                    <h5 className="timeBlockTimeHeader">{timeBlock.startTime}</h5>
                    <h5>to</h5>
                    <h5 className="timeBlockTimeHeader">{timeBlock.endTime}</h5>
                </div>            
            </div>
            <div className="timeBlockScheduleRowContainer" >
                {timeBlock.scheduleRows.map((row, index) => 
                    <ScheduleRowComponent 
                        key={`${row}-${index}`}
                        index={index}
                        onRowDelete={() => handleRowDelete(index, row)}
                        onRowEdit={() => handleRowEdit(row)}
                        row={row}
                        onInputChangeSubmit={onInputChangeSubmit2}      
                    />
                )}
                
            </div>
            <div className="timeBlockIconContainer">
                <img src={deleteIcon} className="trashIcon" alt="delete" onClick={() => onTimeBlockDelete(timeBlock)} />
                {/* <span>Delete Time Block</span> */}
            </div>
        </main>
    );
}




export default TimeBlockItem;