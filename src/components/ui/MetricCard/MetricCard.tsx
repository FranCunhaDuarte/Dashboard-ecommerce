import { ArrowStock } from "../../../assets/arrowStock"
import type { Cycle } from "../../../stores/filter"

type Props = {
    subtitle: string
    number: string
    growth_rate: string
    filterType: Cycle
}

export const MetricCard = ({subtitle,number, growth_rate, filterType}: Props) => {
  return (
    <>
        <div className="w-full h-[150px] bg-card rounded-[7px] border border-border flex flex-col px-3 py-2 justify-between">
            <span className="text-base text-muted-foreground">{subtitle}</span>
            <span className="text-5xl font-semibold text-card-foreground">{number}</span>
            <div className="flex items-center">
                <div className="py-0.5 px-1.5 bg-chart-2/10 border border-chart-2 rounded-sm w-fit flex items-center gap-2"><ArrowStock className="w-4.5 h-4.5" color="var(--color-chart-2)" /><span className="text-chart-2">{growth_rate}</span></div>
                <span className="pl-3 text-base text-muted-foreground">From Last {filterType}</span>
            </div>
        </div>
    </>
  )
}
