import { HubConnectionBuilder } from '@microsoft/signalr';
import React, { useEffect, useState } from 'react'
import cappsuleStore from '../../Stores/cappsuleStore';
import './cappsule.css'

const Cappsule = ({ Cappsule }: any) => {

    const [showMessage, setShowMessage] = useState(false);

    const isValidDate = () => {
        return new Date(Cappsule.time) < new Date()
    }

    const onOpen = () => {
        if (isValidDate()) {
            setShowMessage(!showMessage);
        } else {
            alert("You can't open a cappsule that before time!")
        }
    }

    return (
        <div className='cappsule_container'>
            <div className='cappsulse_Title_Wrapper'>
                <div className='cappsulse_Title'>
                    From: {Cappsule.senderId !== undefined ? Cappsule.senderId : 'Anonymous'}
                </div>
            </div>

            <div className='cappsule_TimeLeft_Wrapper'>
                <div className='cappsule_TimeLeft'>
                    {!showMessage ?
                        <>
                            Date : {new Date(Cappsule.time) > new Date() ? new Date(Cappsule.time).toLocaleDateString('da-DK') : 'Now!'}
                        </>
                        :
                        <>
                            {Cappsule.message}
                        </>
                    }
                </div>
            </div>
            <div className='cappsule_Open' onClick={onOpen}>
                Open
            </div>
        </div>
    )
}

export default Cappsule