import type { NextPage } from 'next'
import {
  ConnectAccountButton, DeviceTable
} from "@seamapi/react";


const Home: NextPage = () => {

  const handleNewDeviceConnection = async() => {
    console.log("createdConnectWebview")
   }

  return (
    <div>
      <h1>Home Auto Door Lock/Unlock Demo</h1>
      <ConnectAccountButton />
      <DeviceTable />
    </div>
  )
}

export default Home
