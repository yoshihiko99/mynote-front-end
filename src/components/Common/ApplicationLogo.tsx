import React from 'react'

type Props = {
  className?: string
}

const ApplicationLogo: React.VFC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="120"
    height="120"
    className={props.className}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z" />
  </svg>
)

export default ApplicationLogo
