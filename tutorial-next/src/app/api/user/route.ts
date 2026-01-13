import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams
  const id = query.get('id')
  const name = query.get('name')
  console.log(id, name)
  return NextResponse.json({ message: 'get' })
}
export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)
  // formData
  // await request.formData()
  // text
  // await request.text()
  return NextResponse.json({ message: 'post' }, { status: 201 })
}
