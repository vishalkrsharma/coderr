import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../styles/Home.scss';

function Home() {
  const [roomId, setRoomId] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
  };

  return (
    <div className='home'>
      <div className='brand'>
        <img className='brand__logo' src='logo.png' alt='coderr-logo' />
        <div className='brand__title'>CODERR</div>
      </div>
      <div className='form'>
        <input type='text' className='form__input' placeholder='Username' />
        <input type='text' className='form__input' value={roomId} placeholder='Room ID' onChange={(e) => setRoomId(e.target.value)} />
        <div className='form__btns'>
          <button className='btn form__btns__submit'>Join</button>
          <button className='btn form__btns__submit' onClick={createNewRoom}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
