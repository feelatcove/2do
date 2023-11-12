import React, { useState } from 'react';
import "./index.css"
import Header from './Organisms/Header';
import Mainboard from './Organisms/Mainboard';
import MyModal from './Molecules/MyModal';

function App() {

  const [ModalActive, setModalActive] = useState<boolean>(false)

  return (
          <div className='bg-gradient-to-b from-violet-400 to-pink-400 h-screen w-screen '>
             {ModalActive ? <MyModal setModal={setModalActive}/> : <></>}
            <Header setModal={setModalActive} />
            <Mainboard/>
          </div>
  );
}

export default App;
