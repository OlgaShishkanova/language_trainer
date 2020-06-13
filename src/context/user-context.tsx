// import React from 'react';

// const NotFound: React.FC = () => {
//   return <div></div>
// }

import React from 'react'
import {useAuth} from './auth-context'

const UserContext = React.createContext({})

const UserProvider = (props: any) => {
  const {
    data
  } = useAuth()
  return <UserContext.Provider value={data?.user} {...props} />
}

const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

export {UserProvider, useUser}