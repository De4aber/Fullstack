import { useObserver } from 'mobx-react';
import React, { useEffect } from 'react'
import Cappsule from '../../Components/cappsulePage/cappsule';
import Test from '../../Components/cappsulePage/cappsule'
import cappsuleStore from '../../Stores/cappsuleStore';
import userStore from '../../Stores/userStore';
import './cappsulePage.css'

const CappsulePage = () => {

    useEffect(() => {
        cappsuleStore.createHubConnection();
    }, [])


    return (
        <>
            <div className='Cappsules_Container'>
                <div className='Cappsules_Wrapper'>
                    <div className='Cappsules_Title'>
                        Your Cappsules
                    </div>
                    <div className='Cappsules_ComponentContainer'>
                        {cappsuleStore.cappsules.map((cappsule: any) => {
                            return (
                                <>

                                    <Cappsule Cappsule={cappsule} />

                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CappsulePage