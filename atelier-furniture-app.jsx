import { useState, useMemo } from 'react'
import { ShoppingCart, X, Plus, Minus, Search, Heart, Star, ArrowRight, Package, Truck, RefreshCw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PRODUCTS = [
  {
    id: 1, name: 'Hagen Sofa', category: 'living', price: 2890,
    rating: 4.8, reviews: 124,
    description: 'Solid oak frame with natural linen upholstery. Handcrafted in Denmark.',
    badge: 'Bestseller',
    hue: '30',
  },
  {
    id: 2, name: 'Ord Coffee Table', category: 'living', price: 780,
    rating: 4.6, reviews: 89,
    description: 'Live-edge white oak slab on blackened steel legs. Each piece is unique.',
    badge: null,
    hue: '25',
  },
  {
    id: 3, name: 'Lund Bed Frame', category: 'bedroom', price: 1650,
    rating: 4.9, reviews: 211,
    description: 'Mortise-and-tenon joinery, oiled walnut. Available in queen and king.',
    badge: 'New',
    hue: '20',
  },
  {
    id: 4, name: 'Skala Dresser', category: 'bedroom', price: 1240,
    rating: 4.7, reviews: 67,
    description: 'Six dovetailed drawers in American black walnut with brass pulls.',
    badge: null,
    hue: '15',
  },
  {
    id: 5, name: 'Atelier Dining Table', category: 'dining', price: 3200,
    rating: 4.9, reviews: 156,
    description: 'Seats eight. Solid ash with a hand-rubbed oil finish.',
    badge: 'Bestseller',
    hue: '35',
  },
  {
    id: 6, name: 'Strand Chair', category: 'dining', price: 490,
    rating: 4.5, reviews: 203,
    description: 'Steam-bent oak back with woven cane seat. Sold individually.',
    badge: null,
    hue: '28',
  },
  {
    id: 7, name: 'Fjord Desk', category: 'office', price: 1890,
    rating: 4.8, reviews: 98,
    description: 'Solid birch with integrated cable management and pull-out tray.',
    badge: 'New',
    hue: '22',
  },
  {
    id: 8, name: 'Kvist Bookshelf', category: 'office', price: 1120,
    rating: 4.6, reviews: 74,
    description: 'Modular solid oak shelving system. Adjustable on five-inch increments.',
    badge: null,
    hue: '18',
  },
]

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'living', label: 'Living Room' },
  { key: 'bedroom', label: 'Bedroom' },
  { key: 'dining', label: 'Dining' },
  { key: 'office', label: 'Office' },
]

function ProductImage({ hue, name }) {
  return (
    <div
      className="w-full h-56 flex items-end p-4 select-none"
      style={{
        background: `linear-gradient(135deg,
          hsl(${hue},35%,88%) 0%,
          hsl(${hue},28%,78%) 50%,
          hsl(${hue},22%,68%) 100%)`,
      }}
    >
      <span className="text-xs font-medium tracking-widest uppercase opacity-40"
        style={{ color: `hsl(${hue},30%,30%)` }}>
        Oak &amp; Ord
      </span>
    </div>
  )
}

function StarRating({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(n => (
        <Star
          key={n}
          size={12}
          className={n <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </span>
  )
}

function ProductCard({ product, onAddToCart, isWished, onToggleWish }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
    >
      <div className="relative">
        <ProductImage hue={product.hue} name={product.name} />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => onToggleWish(product.id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Wishlist"
        >
          <Heart
            size={15}
            className={isWished ? 'fill-rose-500 text-rose-500' : 'text-stone-400'}
          />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-stone-900 text-base leading-snug">{product.name}</h3>
          <span className="text-stone-900 font-bold text-base whitespace-nowrap">
            ${product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-stone-400">({product.reviews})</span>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-stone-900 hover:bg-stone-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-4 py-4 border-b border-stone-100 last:border-0"
    >
      <div
        className="w-16 h-16 rounded-xl flex-shrink-0"
        style={{
          background: `linear-gradient(135deg,
            hsl(${item.hue},35%,88%),
            hsl(${item.hue},22%,72%))`,
        }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <p className="font-medium text-stone-900 text-sm truncate pr-2">{item.name}</p>
          <button onClick={() => onRemove(item.id)} className="text-stone-300 hover:text-stone-500 flex-shrink-0">
            <X size={14} />
          </button>
        </div>
        <p className="text-stone-500 text-sm mt-0.5">${item.price.toLocaleString()}</p>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => onDecrease(item.id)}
            className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"
          >
            <Minus size={11} />
          </button>
          <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
          <button
            onClick={() => onIncrease(item.id)}
            className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"
          >
            <Plus size={11} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function AtelierFurnitureApp() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const increaseQty = (id) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i))
  const decreaseQty = (id) => setCart(prev => {
    const item = prev.find(i => i.id === id)
    if (item.qty === 1) return prev.filter(i => i.id !== id)
    return prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
  })
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))
  const toggleWishlist = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-bold tracking-tight text-stone-900">Oak</span>
            <span className="text-stone-300">&amp;</span>
            <span className="text-xl font-bold tracking-tight text-stone-900">Ord</span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-stone-100 rounded-xl px-3 py-2 flex-1 max-w-xs">
            <Search size={15} className="text-stone-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search furniture…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-stone-700 placeholder-stone-400 outline-none w-full ml-2"
            />
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-400 text-stone-900 text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">Handcrafted furniture</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl">
            Made to last.<br />
            <span className="text-stone-400">Designed to feel.</span>
          </h1>
          <p className="text-stone-400 text-lg max-w-md mb-8">
            Each piece is built by hand using sustainably sourced solid wood. No veneers, no compromises.
          </p>
          <button
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white text-stone-900 font-medium px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors"
          >
            Shop Collection <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-8">
          {[
            { icon: Truck, text: 'Free delivery over $1,000' },
            { icon: Package, text: 'White-glove assembly' },
            { icon: RefreshCw, text: '60-day returns' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-stone-500">
              <Icon size={15} className="text-stone-400" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Product section */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-12">
        {/* Category tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile search */}
        <div className="flex md:hidden items-center gap-1 bg-white rounded-xl px-3 py-2 mb-6 border border-stone-200">
          <Search size={15} className="text-stone-400" />
          <input
            type="text"
            placeholder="Search furniture…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-stone-700 placeholder-stone-400 outline-none w-full ml-2"
          />
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                isWished={wishlist.includes(product.id)}
                onToggleWish={toggleWishlist}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            <p className="text-lg font-medium mb-1">No pieces found</p>
            <p className="text-sm">Try a different category or search term.</p>
          </div>
        )}
      </section>

      {/* Cart drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
                <h2 className="font-semibold text-stone-900">
                  Your Cart {cartCount > 0 && <span className="text-stone-400 font-normal">({cartCount})</span>}
                </h2>
                <button onClick={() => setCartOpen(false)} className="text-stone-400 hover:text-stone-700">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-stone-400 gap-3">
                    <ShoppingCart size={40} strokeWidth={1.5} />
                    <p className="text-sm">Your cart is empty</p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="text-stone-900 text-sm font-medium underline underline-offset-2"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <AnimatePresence>
                    {cart.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onIncrease={increaseQty}
                        onDecrease={decreaseQty}
                        onRemove={removeFromCart}
                      />
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {cart.length > 0 && (
                <div className="px-6 py-5 border-t border-stone-100 space-y-4">
                  <div className="flex justify-between text-sm text-stone-500">
                    <span>Subtotal</span>
                    <span className="font-medium text-stone-900">${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-500">
                    <span>Delivery</span>
                    <span className="font-medium text-stone-900">
                      {cartTotal >= 1000 ? 'Free' : '$150'}
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-stone-900 pt-2 border-t border-stone-100">
                    <span>Total</span>
                    <span>${(cartTotal + (cartTotal >= 1000 ? 0 : 150)).toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-stone-900 hover:bg-stone-700 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                    Checkout <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
