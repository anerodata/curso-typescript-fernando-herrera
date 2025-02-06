;(() => {
  // Manejar singletons
  class ShoppingCart {
    static instance: ShoppingCart
    private constructor(public items: string[]) {
      this.items = items
    }
    static createShopingCart(): ShoppingCart {
      if (!ShoppingCart.instance) {
        ShoppingCart.instance = new ShoppingCart([])
      }
      return ShoppingCart.instance
    }
    public addItem(item: string): void {
      this.items.push(item)
    }
  }
  // Misma instancia
  const shoppingCart1 = ShoppingCart.createShopingCart()
  shoppingCart1.addItem('tomate')
  const shoppingCart2 = ShoppingCart.createShopingCart()
  const shoppingCart3 = ShoppingCart.createShopingCart()
  // Todos tienen el mismo producto
  console.log(shoppingCart1, shoppingCart2, shoppingCart3)
})()

