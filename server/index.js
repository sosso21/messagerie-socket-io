// Load the full build.
const router = require('./router')
const _ = require('lodash');
const express = require('express')
const app = express()
const http = require('http');
const socketio = require('socket.io');
const { addUser, removeUser, getuser, getUserRoom } = require('./user')
const PORT = process.env.PORT || 5000;
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callBack) => {
        const { user, error } = addUser({ id: socket.id }, name, room)
        if (error) return callBack(error)

        socket.emit('message', { user: 'admin', text: `${user.name} Welcome to the room  ${user.room}` })
        socket.broadcast.to(user.name).emit('message', { user: 'admin', text: `${user.name} has Join ` })

        socket.join(user.room)
        
        io.to(user.room).emit('roomData',{room:user.room , users: getUserRoom(user.room)})

        callBack()
    })

    socket.on('sendmessage', (message, callBAck) => {

        const user = getuser(socket.id)

        console.log('user:', user)
        io.to(user.room).emit('message', { user: user.name, text: message })
        callBAck()
    })


    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left` })
        io.to(user.room).emit('roomData',{room:user.room , users: getUserRoom(user.room)})
        }
    })

})

app.use(router)
server.listen(PORT, () => { console.log(`Server lancé sur le port ${PORT}`) })