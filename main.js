// Starting of the server
server.run(() => {
    console.log('something')
})

server.on('error', (err) => {
    console.log(err)
})