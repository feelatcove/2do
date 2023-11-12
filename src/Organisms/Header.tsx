import React from 'react';
import MyButton from '../Atoms/myButton';

type headerProps = {
    setModal: (a: boolean) => void
}


const Header = ({setModal}: headerProps) => {
    let url = 'https://github.com/feelatcove/2do'
    return (
        <div className={"bg-gradient-to-t from-violet-400 to-violet-500 flex flex-row justify-between "}>
            <MyButton name={'Add a new task +'} className={"flex ml-28 animate-wiggle hover:brightness-125 text-green-300 "} 
            onClick={() => setModal(true)}/>
            <MyButton name={'GitHub'} className={"mr-28 underline hover:brightness-125  text-green-300 "} onClick={() => window.open(url, '_blank')}/>
        </div>
    );
};

export default Header;