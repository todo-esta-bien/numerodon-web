import { ReactNode } from "react"

interface IDashboardCardProps {
  children: ReactNode
}

const DashboardCard = ({children}: IDashboardCardProps) => {
  return (
    <section className="bg-base-100 shadow rounded-2xl flex flex-col prose p-4 max-w-fit">
      {children}
    </section>
  )
}

export default DashboardCard
