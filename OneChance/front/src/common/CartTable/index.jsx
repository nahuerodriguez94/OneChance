import React, { useContext } from "react";
import { CartContext } from "../../CartContext/index.jsx";
import { createCart } from "../../Servicios/cart.services.js";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const CartTable = () => {
  const { cartItems, getTotalAmount, setCartItems, addToCart } =
    useContext(CartContext);
  const clientName = localStorage.getItem("userCliente") || "Cliente";

  const handlePayment = async () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío. Agrega productos para continuar.");
      return;
    }

    const cartData = {
      clientName,
      products: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      })),
      totalAmount: getTotalAmount(),
    };

    try {
      await createCart(cartData);
      alert("Gracias por su compra. Su carrito se ha guardado.");
      setCartItems([]); // Limpiar carrito tras la compra
    } catch (error) {
      console.error(
        "Error al procesar el pago:",
        error.response?.data || error.message
      );
      alert("Ocurrió un error al procesar el pago. Intente de nuevo.");
    }
  };


  // Función para reducir cantidad de productos en el carrito
  const decreaseQuantity = (id) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // Elimina productos con cantidad 0
    );
  };

  return (
    <>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Carrito
      </Typography>
      {cartItems.length > 0 ? (
        <>
          <Typography sx={{ padding: 2 }}>
            Nombre del Cliente: {clientName}
          </Typography>

          <TableContainer component={Paper} sx={{ padding: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={item.id || index}>
                    <TableCell>
                      <img
                        src={item.image}
                        alt={`Imagen de ${item.name}`}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {item.name}
                    </TableCell>
                    <TableCell>U$S {item.price}</TableCell>
                    <TableCell>
                      <Button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </Button>
                      {item.quantity || 1}
                      <Button onClick={() => addToCart(item)}>+</Button>
                    </TableCell>
                    <TableCell>
                      U$S {(item.price * (item.quantity || 1)).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} align="right">
                    <Typography variant="h6">Total:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">
                      U$S {getTotalAmount().toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Typography sx={{ padding: 2 }}>El carrito está vacío.</Typography>
      )}
    </>
  );
};
