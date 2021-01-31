import React from 'react'
import CommonProviders from '@components/CommonProviders'
import Layout from '@components/Layout'
import Router from '@components/CommonProviders/components/Router'

const App: React.FC = () => (
  <CommonProviders>
    <Layout>
      <Router />
    </Layout>
  </CommonProviders>
)

export default App
