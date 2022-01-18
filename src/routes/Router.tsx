import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LayoutDashboard from 'common/components/layouts/Dashboard'

// pages
import HomePage from 'pages/home'
import DetailsPage from 'pages/details'

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutDashboard />}>
        <Route index element={<HomePage />} />
        <Route path="details/:channel_id" element={<DetailsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router
