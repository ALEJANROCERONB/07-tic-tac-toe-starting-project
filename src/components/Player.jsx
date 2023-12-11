import { useState } from "react"

export default function Player({ name, symbol, isActive, onChangeName }) {

  const [playername, setPlayername] = useState(name)
  const [isEditing, SetIsEditing] = useState(false)


  function handleEditClick() {
    SetIsEditing((editing) => !editing)
    if (isEditing) {
      onChangeName(symbol, playername)
    }
  }

  function handleChange(event) {
    setPlayername(event.target.value)
  }

  let editableplayername = <span className="player-name"> {playername} </span>


  if (isEditing) {
    editableplayername = (
      <input type="text" required value={playername} onChange={handleChange} />
    )
  }

  return <li className={isActive ? "active" : undefined}>
    <span className="player">
      {editableplayername}
      <span className="player-symbol"> {symbol} </span>
    </span>
    <button onClick={handleEditClick}> {isEditing ? "Save" : "Edit"} </button>
  </li>
}