type ResolveType = (value: any) => void

type RejectType = (reason: any) => void

type Executor = (resolve: ResolveType, reject: RejectType) => void

type PromiseStatus = 'pending' | 'fulfilled' | 'rejected'

export { ResolveType, RejectType, Executor, PromiseStatus }
