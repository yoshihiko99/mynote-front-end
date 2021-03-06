import ApplicationLogo from '@/components/Common/ApplicationLogo'
import AuthCard from '@/components/Auth/AuthCard'
import AuthValidationErrors from '@/components/Auth/AuthValidationErrors'
import Button from '@/components/Common/Button'
import GuestLayout from '@/components/Common/Layouts/GuestLayout'
import Input from '@/components/Auth/Input'
import Label from '@/components/Auth/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React, { useState } from 'react'
import FullSizeLoading from '@/components/Common/FullSizeLoading'

const Register: React.VFC = () => {
  const { register } = useAuth({ middleware: 'guest' })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState<unknown[]>([])
  const [loading, setLoading] = useState(false)

  const submitForm = async (event: { preventDefault: () => void }) => {
    setLoading(true)
    event.preventDefault()
    await register({ setErrors, name, email, password, passwordConfirmation })
    setLoading(false)
  }

  if (loading) {
    return <FullSizeLoading />
  } else {
    return (
      <GuestLayout>
        <AuthCard logo={<ApplicationLogo />}>
          {/* Validation Errors */}
          <AuthValidationErrors className="mb-4" errors={errors} />

          <form onSubmit={submitForm}>
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>

              <Input
                id="name"
                type="text"
                value={name}
                className="block mt-1 w-full"
                onChange={(event) => setName(event.target.value)}
                required
                autoFocus
              />
            </div>

            {/* Email Address */}
            <div className="mt-4">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                value={email}
                className="block mt-1 w-full"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                value={password}
                className="block mt-1 w-full"
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
              <Label htmlFor="passwordConfirmation">Confirm Password</Label>

              <Input
                id="passwordConfirmation"
                type="password"
                value={passwordConfirmation}
                className="block mt-1 w-full"
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
                required
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link href="/login">
                <a className="underline text-sm text-gray-600 hover:text-gray-900">
                  Already registered?
                </a>
              </Link>

              <Button className="ml-4">Register</Button>
            </div>
          </form>
        </AuthCard>
      </GuestLayout>
    )
  }
}

export default Register
