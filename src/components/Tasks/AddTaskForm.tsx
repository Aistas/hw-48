import React from 'react';

interface AddTaskFormProps {
    currentTask: string;
    setCurrentTask: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ currentTask, setCurrentTask, addTask }) => {
    return (
        <div className="add-task-form">
            <button onClick={addTask}>Add</button>
            <input
                type="text"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
                placeholder="Enter your task"
            />
        </div>
    );
};

export default AddTaskForm;