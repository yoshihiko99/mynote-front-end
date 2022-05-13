import React from 'react'

type Props = {
  logo?: React.ReactNode
  children?: React.ReactNode
}

const AuthCard: React.VFC<Props> = (props) => (
  <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    <div>{props.logo}</div>

    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
      {props.children}
    </div>
  </div>
)

export default AuthCard
