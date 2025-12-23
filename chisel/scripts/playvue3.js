#!/usr/bin/env zx

import 'zx/globals'

await Promise.all([
  $`pnpm -F @chisel/ui build && pnpm -F @chisel/playground-vue3 dev`,
  $`pnpm -F @chisel/server dev`,
])
