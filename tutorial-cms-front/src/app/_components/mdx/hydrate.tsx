// src/app/_components/mdx/hydrate.tsx
'use client'

// ...
import type { HydrateProps } from 'next-mdx-remote-client'
import type { FC, JSX } from 'react'

import { isNil } from 'lodash'
import { hydrate } from 'next-mdx-remote-client'
import { useMemo, useState } from 'react'

import { deepMerge } from '@/libs/utils'

import type { MdxHydrateProps } from './types'

import $styles from './hydrate.module.css'

export const MdxHydrate: FC<MdxHydrateProps> = (props) => {
  const { serialized, ...rest } = props
  const [content, setContent] = useState<JSX.Element | null>(null)
  const options = useMemo(() => deepMerge(defaultMdxHydrateOptions, rest, 'merge'), [rest])
  useDeepCompareEffect(() => {
    const { content, error } = hydrate({ ...serialized, ...options } as HydrateProps)
    if (!error && !isNil(content)) setContent(content)
  }, [serialized, options])
  if (isNil(serialized) || 'error' in serialized) return null
  return (
    !isNil(content) && (
      <div className={$styles.container}>
        <div className={$styles.article}>{content}</div>
      </div>
    )
  )
}
