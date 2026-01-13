'use client'
import { useParams } from 'next/navigation'
import React, { Fragment } from 'react'

export default function LineupDetail() {
  const params = useParams()

  const id = params.id

  return (
    <Fragment>
      <p>id</p>
      <p>name</p>
    </Fragment>
  )
}
