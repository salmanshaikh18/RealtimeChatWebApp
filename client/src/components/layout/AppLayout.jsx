import React from 'react'
import Header from './Header'
import Footer from './Footer'

const AppLayout = () => WrappedComponent => {
  return (props) => (
    <div>
        <Header />
        <WrappedComponent {...props} />
        <div>Footer</div>
        <Footer />
    </div>
  )
}

export default AppLayout