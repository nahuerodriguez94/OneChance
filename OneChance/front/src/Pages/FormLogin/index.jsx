import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Grid2 } from "@mui/material";
import { loginUser } from "../../Servicios/user.services";

export const FormLogin = ({ setUser, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!username || !password) {
      setError("Usuario y contraseña son obligatorios");
      return;
    }
    try {
      const userExists = await loginUser(username, password);
      if (userExists) {
        alert(`Bienvenido ${username} a OneChances`);
        setUser(username);
        localStorage.setItem("user", JSON.stringify({ username, role: "user" }));
        setError(false);
        if (onClose) onClose();
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      console.error("Error al consultar el admin:", err);
      setError("Error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  const handleLogoutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
    setUsername("");
    setPassword("");
    setError(false);
    alert("Has cerrado sesión.");
  };

  return (
    <Form
      name="FormLogin"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre de Usuario"
        name="username"
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu nombre de usuario!",
          },
        ]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          { required: true, message: "Por favor ingresa tu contraseña!" },
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Grid2
          container
          spacing={2}
          sx={{ ml: "auto", mr: 5, alignItems: "center" }}
        >
          <Button type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
          <Button type="default" onClick={handleLogoutUser}>
            Cerrar Sesión
          </Button>
        </Grid2>
      </Form.Item>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    </Form>
  );
};
