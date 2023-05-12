import { ReactNode } from "react"

interface IDashboardCardProps {
  children: ReactNode
}

const DashboardCard = ({children}: IDashboardCardProps) => {
  return (
    <div className="bg-base-100 shadow rounded-2xl flex flex-col prose p-4 w-full">
      {children}
    </div>
  )
}

export default DashboardCard
