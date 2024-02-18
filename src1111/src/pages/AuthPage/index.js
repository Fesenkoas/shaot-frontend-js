import React from 'react'
import { Route, Routes } from 'react-router'
import { Login } from './Login'

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default index