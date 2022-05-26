import { useObserver } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import Cappsule from '../../Components/cappsulePage/cappsule';
import Test from '../../Components/cappsulePage/cappsule'
import cappsuleStore from '../../Stores/cappsuleStore';
import userStore from '../../Stores/userStore';
import './cappsulePage.css'

const CappsulePage = () => {

    const [loaded, setLoaded] = useState(false);

    const load = () => setLoaded(true);



    useEffect(() => {
        cappsuleStore.createHubConnection();
        setTimeout(load, 500);
    }, [])


    return (
        <>
            <div className='Cappsules_Container'>
                <div className='Cappsules_Wrapper'>
                    <div className='Cappsules_Title'>
                        Your Cappsules
                    </div>
                    <div className='Cappsules_ComponentContainer'>
                        {cappsuleStore.cappsules.map((cappsule: any) => 

                            <Cappsule key={cappsule.capsuleId} Cappsule={cappsule} />

                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CappsulePage