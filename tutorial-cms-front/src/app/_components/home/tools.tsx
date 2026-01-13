// src/app/_components/home/tools.tsx
'use client'
import type { FC } from 'react'

import { PostCreateButton } from '../post/create-button'
import { cn } from '../shadcn/utils'
import { BackButton } from './back-button'
import $styles from './tools.module.css'

export const Tools: FC<{ back?: boolean; className?: string }> = ({ back, className }) => {
  return (
    <div className={cn($styles.tools, className)}>
      {back && <BackButton />}
      <PostCreateButton />
    </div>
  )
}
