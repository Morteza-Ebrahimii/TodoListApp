import { useState } from "react"

export default function NewTodoForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()

        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }
    return (
        <form className="new-item-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id='item' value={newItem} onChange={e => { setNewItem(e.target.value) }} />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}


