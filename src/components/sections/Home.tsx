
import { ButtonFilter } from "../ui/ButtonFilter/ButtonFilter"
import { useFilterStore, type Cycle } from "../../stores/filter";
import { HomeHeader } from "../ui/HomeHeader/HomeHeader";
import { MetricsArticle } from "../ui/MetricsArticle/MetricsArticle";
import { ChartAreaGradient } from "../ui/Charts/Charts";
import { TopPorducts } from "../ui/TopProducts/TopPorducts";
import { LastOrders } from "../ui/LastOrders/LastOrders";


export const Home = () => {

    const options: Cycle[] = ['Today', 'Week', 'Month', 'Quarter', 'Year', 'Custom Date'];

    const { cycle, setCycle } = useFilterStore();

  return (
    <>
        <section className="w-full grid grid-cols-3 gap-3 py-3 pb-30">
            <div className="col-span-3">
                <HomeHeader />
            </div>
            <div className="col-span-3">
                <div className="col-span-3 flex items-center justify-between mt-15 mb-5">
                    <div className="flex gap-2">
                        {options.map((option, i) => (
                            <ButtonFilter key={i} active={option === cycle} label={option} onClick={() => setCycle(option)} />
                        ))}
                    </div>
                    <div></div>
                </div>
            </div>
            <article className="col-span-3">
                <MetricsArticle cycle={cycle} />
            </article>
            <article className="col-span-2">
                <ChartAreaGradient cycle={cycle} />
            </article>
            <article className="col-span-1">
                <TopPorducts />
            </article>
            <article className="col-span-3">
                <LastOrders />
            </article>
        </section>
    </>
  )
}
