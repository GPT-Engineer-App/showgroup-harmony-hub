import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const fetchProducts = async () => {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: "T-Shirt", price: 25 },
    { id: 2, name: "Poster", price: 15 },
    { id: 3, name: "Album CD", price: 20 },
  ];
};

const Shop = () => {
  const [cart, setCart] = useState([]);
  const queryClient = useQueryClient();

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const addToCartMutation = useMutation({
    mutationFn: (product) => {
      // Simulating an API call to add to cart
      return new Promise(resolve => setTimeout(() => resolve(product), 500));
    },
    onSuccess: (product) => {
      setCart(prevCart => [...prevCart, product]);
      queryClient.invalidateQueries('cart');
    },
  });

  const addToCart = (product) => {
    addToCartMutation.mutate(product);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Shop Our Merchandise</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Shop;
