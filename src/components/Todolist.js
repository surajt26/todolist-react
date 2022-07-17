import React, { useState } from 'react';
import AddNewItem from './AddNewItem';
import Header from './Header';
import ItemList from './ItemList';
import UpdateInput from './UpdateInput';

const Todolist = () => {

    // Task list to store all task
    const [taskList, setTaskList] = useState(['Dates', 'Coconuts', 'Bananas', 'Apples']);

    // Selected task to store task and their id
    const [selectedTask, setSelectedTask] = useState({
        task: '',
        taskId: null
    });

    return (<>
        <div className='container position-relative'>
            <div
                className='row'
                style={{
                    height: '100vh',
                    zIndex: '1'
                }}
            >
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                    mx-auto my-auto border rounded shadow'>
                    {/* Header Component */}
                    <Header />
                    {/* Add New Item Component */}
                    <AddNewItem
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                    {/* Item List Component */}
                    <ItemList
                        taskList={taskList}
                        setTaskList={setTaskList}
                        setSelectedTask={setSelectedTask}
                    />
                </div>
            </div>
            {/* Update Input Component */}
            <UpdateInput
                taskList={taskList}
                setTaskList={setTaskList}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
            />
        </div>
    </>)
}

export default Todolist;