import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

import '../styles/HomePage.scss';

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success('Created new room');
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error('Room ID & Username is required');
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
      joinRoom();
    }
  };

  return (
    <div className='home'>
      <div className='brand'>
        <img className='brand__logo' src='logo.png' alt='coderr-logo' />
        <div className='brand__title'>CODERR</div>
      </div>
      <div className='form'>
        <input
          type='text'
          className='form__input'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          onKeyUp={handleInputEnter}
        />
        <input
          type='text'
          className='form__input'
          value={roomId}
          placeholder='Room ID'
          onChange={(e) => setRoomId(e.target.value)}
          onKeyUp={handleInputEnter}
        />
        <div className='form__btns'>
          <button className='btn form__btns__submit' onClick={joinRoom}>
            Join
          </button>
          <button className='btn form__btns__submit' onClick={createNewRoom}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
