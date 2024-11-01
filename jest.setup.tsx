import type { ReactNode } from 'react'
import React from 'react'

import '@testing-library/jest-dom'

jest.mock('next/head', () => {
  return ({ children }: { children: ReactNode }) => <>{children}</>
})
