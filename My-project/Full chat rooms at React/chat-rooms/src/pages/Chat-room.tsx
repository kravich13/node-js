import React, { useState } from 'react'
import Rooms from '../components/Rooms'
import Chat from '../components/Chat'
import { ChatInfo } from '../components/Chat-info'
import { io } from 'socket.io-client'
import { IMessage } from '../interfaces'

const socket: any = io()

const ChatRoom: React.FC = () => {
  const [clickRoom, setClickRoom] = useState<string>('')

  async function chatRequest(room: string = clickRoom) {
    const response = await fetch('/rooms/allmessages', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ clickRoom: room })
    })
    const arrMessages: IMessage[] = await response.json()
    setClickRoom(room)
    return arrMessages
  }

  return (
    <section id="main-window-chat">
      <ChatInfo socket={socket} clickRoom={clickRoom} />
      <div id="block-rooms-chat">
        <Rooms socket={socket} setClickRoom={setClickRoom} />
        <Chat socket={socket} clickRoom={clickRoom} chatRequest={chatRequest} />
      </div>
    </section>
  )
}

export default React.memo(ChatRoom)
