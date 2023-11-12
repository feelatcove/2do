import React from 'react';

type Props = {
    name: string
    className: string
    onClick: () => void
}


const MyButton = ({name, className, onClick}: Props) => {
    return (
        <div>
            <button  className={"font-bold text-4xl p-2 subpixel-antialiased drop-shadow " + className} onClick={onClick}>
                {name}
            </button>
        </div>
    );
};

export default MyButton;