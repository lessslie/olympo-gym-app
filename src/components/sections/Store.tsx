import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Star, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock products data
const products = [
  {
    id: 1,
    name: 'Proteína Whey Premium',
    price: 8500,
    originalPrice: 10000,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop',
    category: 'Suplementos',
    rating: 4.8,
    reviews: 124,
    badge: 'Más Vendido',
    description: 'Proteína de suero de alta calidad con 25g por porción'
  },
  {
    id: 2,
    name: 'Remera Olympo Dry-Fit',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Indumentaria',
    rating: 4.6,
    reviews: 89,
    description: 'Remera técnica transpirable para entrenamientos intensos'
  },
  {
    id: 3,
    name: 'Creatina Monohidrato',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    category: 'Suplementos',
    rating: 4.9,
    reviews: 156,
    badge: 'Nuevo',
    description: 'Creatina pura para aumento de fuerza y masa muscular'
  },
  {
    id: 4,
    name: 'Botella Térmica Olympo',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    category: 'Accesorios',
    rating: 4.7,
    reviews: 67,
    description: 'Botella de acero inoxidable 750ml con logo Olympo'
  },
  {
    id: 5,
    name: 'Pre-Entreno Explosive',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    category: 'Suplementos',
    rating: 4.5,
    reviews: 78,
    description: 'Fórmula avanzada para energía y concentración máxima'
  },
  {
    id: 6,
    name: 'Short Olympo Pro',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1506629905607-d9f36b2f0617?w=400&h=400&fit=crop',
    category: 'Indumentaria',
    rating: 4.4,
    reviews: 52,
    description: 'Short deportivo con tecnología anti-olor y secado rápido'
  }
];

const categories = ['Todos', 'Suplementos', 'Indumentaria', 'Accesorios'];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cartItems, setCartItems] = useState<number[]>([]);
  const { toast } = useToast();

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    setCartItems(prev => [...prev, productId]);
    
    // Save to localStorage
    const existingCart = JSON.parse(localStorage.getItem('olympo-cart') || '[]');
    localStorage.setItem('olympo-cart', JSON.stringify([...existingCart, productId]));
    
    toast({
      title: "¡Agregado al carrito!",
      description: `${product?.name} se agregó correctamente.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="store" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Tienda Olympo
            </span>
          </div>
          
          <h2 className="heading-section text-foreground">
            Equipate con
            <br />
            <span className="text-accent">productos premium</span>
          </h2>
          
          <p className="text-luxury max-w-2xl mx-auto">
            Descubre nuestra selección de suplementos de alta calidad, indumentaria técnica 
            y accesorios diseñados para potenciar tu rendimiento.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-accent text-brand-black' : ''}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="card-luxury group overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-brand-black">
                    {product.badge}
                  </Badge>
                )}
                
                {/* Quick Add Button */}
                <Button
                  size="sm"
                  onClick={() => addToCart(product.id)}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-black/80 text-brand-white hover:bg-brand-black"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => addToCart(product.id)}
                    className="bg-accent text-brand-black hover:bg-accent/90"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-4 right-4 z-40">
            <Card className="bg-brand-black text-brand-white border-brand-gold/20 shadow-gold">
              <div className="p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-brand-black" />
                </div>
                <div>
                  <p className="font-bold text-brand-gold">{cartItems.length} productos</p>
                  <p className="text-sm text-gray-300">en tu carrito</p>
                </div>
                <Button variant="secondary" size="sm">
                  Ver Carrito
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card-luxury max-w-2xl mx-auto bg-gradient-gold text-brand-black">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">¿No encontrás lo que buscás?</h3>
              <p className="font-medium">
                Consultanos por productos específicos o asesoría personalizada para alcanzar tus objetivos.
              </p>
              <Button variant="secondary" className="bg-brand-black text-brand-white hover:bg-gray-800">
                Consultar Producto Específico
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;