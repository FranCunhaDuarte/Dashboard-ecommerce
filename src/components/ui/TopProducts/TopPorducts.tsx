
export const TopPorducts = () => {
  return (
    <>
        <div className="h-full w-full border border-border bg-card rounded-xl py-6 px-4 flex flex-col">
            <div className="font-bold leading-none mb-2">Best selling products</div>
            <div className="h-full w-full flex flex-col">
                <div className="px-1 w-full grid grid-cols-[40px_2fr_1fr_1fr] border-b border-border py-2 text-neutral-400">
                    <span>#</span>
                    <span>Product</span>
                    <span>Revenue</span>
                    <span>Sales</span>
                </div>
                <div className="w-full h-full grid grid-rows-10 cursor-default">
                    <div className="px-1 w-full h-full grid grid-cols-[40px_2fr_1fr_1fr] items-center hover:bg-popover transition-all duration-100 border-b border-border">
                        <span className="whitespace-nowrap">1</span>
                        <div className="flex items-center gap-2">
                            <span><img className="w-10 aspect-square rounded-sm" src="/media/images/avatar.jpg" alt="" /></span>
                            <span className="whitespace-nowrap">Campera</span>
                        </div>
                        <span className="whitespace-nowrap">$ 1.050</span>
                        <span className="whitespace-nowrap">123</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
