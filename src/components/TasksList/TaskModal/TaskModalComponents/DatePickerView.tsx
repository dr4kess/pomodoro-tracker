import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerViewProps } from '../../../../store/types/tasks.types';


const DatePickerView: React.FC<DatePickerViewProps> = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="task-modal-input-group">
            <label htmlFor="task-due-date">Due Date</label>
            <DatePicker
                id="task-due-date"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a due date"
                className="task-datepicker"
            />
        </div>
    );
};

export default DatePickerView;