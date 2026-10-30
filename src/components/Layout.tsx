import { FormEvent, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { ArrowRight, Compass, Globe, Menu, Search, X } from 'lucide-react'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const submitSearch = (event: FormEvent) => { event.preventDefault(); if (search.trim()) navigate(`/explorar?q=${encodeURIComponent(search.trim())}`) }
  return <div className="page-shell">
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-5">
        <Link to="/" className="shrink-0"><img src="/assets/logos/Text_Only/Header_Site/Fundo_Transparente/logo_Header_Site_Fundo_Transparente.webp" alt="Travel Explorer" className="h-9 w-auto" /></Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink md:flex">
          <NavLink to="/explorar" className={({isActive}) => isActive ? 'text-gold' : 'hover:text-gold'}>Explorar</NavLink>
          <a href="#roteiros" className="hover:text-gold">Criar roteiro</a><a href="#destinos" className="hover:text-gold">Dashboard</a>
        </nav>
        <form onSubmit={submitSearch} className="hidden min-w-56 flex-1 max-w-sm items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 text-slate-400 lg:flex"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Para onde você vai?" className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" aria-label="Buscar destino" /></form>
        <div className="hidden items-center gap-3 sm:flex"><Link to="/login" className="rounded-full border border-ink px-5 py-2 text-sm font-semibold hover:bg-ink hover:text-white">Login</Link><Link to="/registrar" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink hover:bg-amber-400">Registrar</Link></div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <div className="border-t border-slate-200 bg-white p-5 md:hidden"><div className="flex flex-col gap-4 font-semibold"><Link onClick={() => setMenuOpen(false)} to="/explorar">Explorar</Link><a href="#roteiros" onClick={() => setMenuOpen(false)}>Criar roteiro</a><Link to="/login">Login</Link><Link to="/registrar" className="rounded-full bg-gold px-4 py-2 text-center">Registrar</Link></div></div>}
    </header>
    <main><Outlet /></main>
    <footer className="bg-ink py-12 text-white"><div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><img src="/assets/logos/Text_Only/Footer_Mono/Fundo_Transparente/logo_Footer_Mono_Fundo_Transparente.webp" alt="Travel Explorer" className="mb-4 h-8 w-auto brightness-0 invert"/><p className="max-w-xs text-sm text-sky">Planeje melhor. Descubra mais. Viva cada destino.</p></div><div className="flex gap-8 text-sm"><div><p className="mb-3 font-bold text-gold">Navegação</p><Link className="block hover:text-gold" to="/explorar">Explorar destinos</Link><a className="mt-2 block hover:text-gold" href="#roteiros">Criar roteiro</a></div><div><p className="mb-3 font-bold text-gold">Conecte-se</p><div className="flex gap-3"><a aria-label="Instagram" href="#"><Globe size={20}/></a><a aria-label="Travel Explorer" href="#"><Compass size={20}/></a></div></div></div></div><div className="container mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-sky sm:flex-row sm:justify-between"><span>© 2026 Travel Explorer. Todos os direitos reservados.</span><span>Feito para viajantes curiosos.</span></div></footer>
  </div>
}

export function SectionLink({ children, to = '/explorar' }: { children: string; to?: string }) { return <Link to={to} className="inline-flex items-center gap-2 font-semibold text-ink hover:text-gold">{children}<ArrowRight size={16}/></Link> }
