let users = [];

const addUser = ({ id }, userName, userRoom) => {
    const name = userName.trim().toUpperCase()
    const room = userRoom.trim().toUpperCase()
    const exestingUser = users.find((user) => user.name == name && user.room == room)
    if (exestingUser) {
        return { error: "l'utilisateur existe déjà" }
    }
    const user = { id, name, room }
    users.push(user)
    return { user }

}
const removeUser = (id) => {
    const index = users.find(user => user.id == id);
    if (index != -1) {
        return users.splice(index, 1)[0];
    }
}
const getuser = (id) => users.find(user => user.id == id);
const getUserRoom = (room) => users.filter((user) => user.room == room);
module.exports = { addUser, removeUser, getuser, getUserRoom }