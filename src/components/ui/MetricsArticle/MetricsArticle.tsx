import type { Cycle } from "../../../stores/filter"
import { MetricCard } from "../MetricCard/MetricCard"

type Props = {
    cycle: Cycle
}

export const MetricsArticle = ({cycle} : Props) => {
  return (
    <>
        <div className="w-full grid grid-cols-4 gap-3">
            <MetricCard subtitle="Gross revenue" number={`$${Number(3000).toLocaleString()}`} filterType={cycle}  growth_rate={'12.5%'}  />
            <MetricCard subtitle="Avg. order value" number={`$${Number(250).toLocaleString()}`} filterType={cycle}  growth_rate={'12.5%'}  />
            <MetricCard subtitle="Conversion rate" number={`${Number(12).toLocaleString()}%`} filterType={cycle}  growth_rate={'12.5%'}  />
            <MetricCard subtitle="Customers" number={`${Number(306).toLocaleString()}`} filterType={cycle}  growth_rate={'12.5%'}  />
        </div>
    </>
  )
}
