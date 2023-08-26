import React from 'react'
import { LayoutManadger } from '../../components/LayoutManager'
import { Route, Routes } from 'react-router'
import { Login } from './Login'

const index = () => {
  return (
    <LayoutManadger>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </LayoutManadger>
  )
}

export default index