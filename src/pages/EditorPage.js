import React, { useState, useRef, useEffect } from 'react';
import ACTIONS from '../Actions';

import Client from '../components/Client';
import Editor from '../components/Editor';
import { initSocket } from '../socket';

import { useLocation } from 'react-router-dom';

import '../styles/EditorPage.scss';

function EditorPage() {
  const socketRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });
    };
  }, []);

  const [clients, setClients] = useState([
    { socketId: 1, username: 'Vishal S' },
    { socketId: 2, username: 'Matt M' },
    { socketId: 3, username: 'Matt M' },
    { socketId: 4, username: 'Matt M' },
    { socketId: 5, username: 'Matt M' },
    { socketId: 6, username: 'Matt M' },
    { socketId: 7, username: 'Matt M' },
  ]);

  return (
    <div className='wrap'>
      <div className='side'>
        <div className='side__top'>
          <img className='logo' src='../logo.png' alt='coderr-logo' />
          <div className='line'></div>
          <div className='connect'>Connected</div>
          <div className='clientDiv'>
            {clients.map((client) => {
              return <Client key={client.socketId} username={client.username} />;
            })}
          </div>
        </div>
        <div className='side__bottom'>
          <div className='btn white'>Copy Room ID</div>
          <div className='btn red'>Leave Room</div>
        </div>
      </div>
      <div className='textarea'>
        <Editor />
      </div>
    </div>
  );
}

export default EditorPage;
