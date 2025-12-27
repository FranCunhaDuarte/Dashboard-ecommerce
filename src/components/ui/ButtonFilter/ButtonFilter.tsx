
type PropsButtonFilter = {
    active: boolean
    label: string
    onClick: () => void
}

export const ButtonFilter = ({active, label, onClick}: PropsButtonFilter) => {

  return (
    <>
        <button onClick={onClick} className="bg-input/30 py-1.5 px-2.5 rounded-[10px] border border-input hover:bg-input/50 transition-all duration-300 cursor-pointer" style={{background: active ? 'color-mix(in oklab, var(--color-chart-1) 80%, transparent' : undefined, border: active ? 'transparent': undefined}}>{label}</button>
    </>
  )
}


