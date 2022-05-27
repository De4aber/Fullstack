import { HubConnectionBuilder } from '@microsoft/signalr';
import React, { useEffect, useState } from 'react'
import cappsuleStore from '../../Stores/cappsuleStore';
import './cappsule.css'

const Cappsule = ({ Cappsule }: any) => {

    const [showMessage, setShowMessage] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const isValidDate = () => {
        var initDate = Cappsule.time.split(' ')[0]
        var dateParts = initDate.split("/");

        var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        console.log(dateObject < new Date());

        return dateObject < new Date()
    }

    const dateString = () => {
        var initDate = Cappsule.time.split(' ')[0]
        var dateParts = initDate.split("/");

        return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    }

    const onOpen = () => {
        setShowMessage(!showMessage);
    }

    return (
        <div className='cappsule_container'>
            <div className='cappsulse_Title_Wrapper'>
                <div className='cappsulse_Title'>
                    From: {Cappsule.senderUsername !== undefined ? Cappsule.senderUsername : 'Anonymous'}
                </div>
            </div>

            <div className='cappsule_TimeLeft_Wrapper'>
                <div className='cappsule_TimeLeft'>
                    {!showMessage ?
                        <>
                            Date : {dateString() > new Date() ? new Date(dateString()).toLocaleDateString('da-DK') : 'Now!'}
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