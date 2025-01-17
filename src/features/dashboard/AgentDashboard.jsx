import React from 'react'
import Orderstable from '../common/Orderstable'
import {  useGetOrdersByUserNameQuery } from '../../services/order.server'
import { useSelector } from 'react-redux'

function AgentDashboard() {
  var {username} = useSelector(state=>state.auth)

  var {isLoading,data:orders}=useGetOrdersByUserNameQuery(username);
  return (
    <div>
        <h1>AgentDashboard</h1>
        <Orderstable orders={orders}></Orderstable>
    </div>
  )
}

export default AgentDashboard