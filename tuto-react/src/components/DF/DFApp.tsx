import DFPassword from './DFPassword'

export default function DFApp() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="flex flex-col gap-2 border-b border-slate-200 pb-5">
          <p className="text-sm font-medium text-slate-500">Delta Force Tools</p>
          <h1 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
            DF 工具面板
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            快速查看三角洲行动相关信息。
          </p>
        </header>

        <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <DFPassword />
        </section>
      </div>
    </main>
  )
}
