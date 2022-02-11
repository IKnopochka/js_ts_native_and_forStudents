export const User = () => {

    const deleteUser = () => alert("User deleted")
    const saveUser = () => alert("User saved")

    return <div>
        Iryna
     <button onClick={saveUser}>Save</button>
    <button onClick={deleteUser}>Delete</button>
    </div>
}