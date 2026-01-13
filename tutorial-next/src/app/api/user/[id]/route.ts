import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  return NextResponse.json({ message: `get id:${params}` })
}
