import React from 'react'

const FeaturedHero = () => {
  return (
    <>
      <section className="relative mt-10 rounded-2xl border border-border/70 bg-gradient-to-b from-surface/80 to-background/40 p-6 md:p-10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.45)]">

        {/* background glow */}
        <div className="absolute -inset-20 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.14),transparent_45%)]" />

        <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Text Content */}
            <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Featured Story
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
                Open-Source AI Models Are Now Beating Proprietary Models
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                The AI ecosystem is shifting rapidly as open-source models start matching
                and sometimes outperforming closed systems. Here's what it means for
                developers, startups, and the future of artificial intelligence.
            </p>

            <button className="px-6 py-3 rounded-xl bg-primary hover:bg-primaryHover transition text-white font-medium">
                Read Article
            </button>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-surface/40">
                <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                    alt="AI featured"
                    className="w-full h-[340px] object-cover opacity-90"
                />
            </div>


        </div>
        </section>
    </>
  )
}

export default FeaturedHero
