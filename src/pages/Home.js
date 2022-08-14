import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Created a new room');
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error('ROOM ID & username is required');
      return;
    }

    // Redirect
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
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <div className='title'>
          <img className='homePageLogo' src='/logo.png' alt='coderr-logo' />
          <h1 className='homePageTitle'>CODERR</h1>
        </div>
        <div className='inputGroup'>
          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <input type='text' className='inputBox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter} />

          <span className='createInfo'>Paste invitation ROOM ID. If you don't have an invite then create new ROOM.</span>
          <div className='btns'>
            <button className='btn joinBtn' onClick={joinRoom}>
              Join
            </button>
            <button onClick={createNewRoom} href='' className='btn joinBtn'>
              New Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
