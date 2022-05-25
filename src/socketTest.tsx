import React, { useEffect } from 'react'
import { useStore } from './stores/store'

const SocketTest = () => {

    const { testStore } = useStore();
    useEffect(() => {
        testStore.sendTest();
    }, [])
    
    
  return (
    <div>{}</div>
  )
}

export default SocketTest