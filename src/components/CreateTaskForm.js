import React from 'react'

export default function CreateTaskForm({ onSubmit }) {
    return (
        <div >
            <form className="create-form">
                <label htmlFor="new">Write your task!</label>
                <input id="new" type="text" required />
                <button className="add-btn" type="button" onClick={onSubmit}>ADD TASK</button>
            </form>
        </div>
    )
}
