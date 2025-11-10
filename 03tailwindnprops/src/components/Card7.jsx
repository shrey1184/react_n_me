import React from 'react'
function Card7({username}) {
  console.log(username)
  return (
    <div className="w-60 rounded-xl overflow-hidden">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt={username}
        className="w-full h-48 object-cover"
      />
      <div className="bg-white/30 backdrop-blur-md py-4 px-5 relative -top-[3.4rem] rounded-b-xl z-10 border border-white/20 shadow-lg">
        <h1 className="font-bold font-mono text-xl text-white drop-shadow-lg">{username}</h1>
      </div>
    </div>
  )
}
export default Card7
