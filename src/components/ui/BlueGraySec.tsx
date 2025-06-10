
// Blue-Gray Section

interface BlueGraySecProps {
    children?: React.ReactNode
}

export default function BlueGraySec ({ children }:BlueGraySecProps) {
    
    return (
        <section className = "w-full bg-radial from-slate-700 to-zinc-950 flex flex-col mb-0">
            {children}
        </section>
    );
}