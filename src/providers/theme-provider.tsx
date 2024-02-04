"use client";
import { ConfigProvider } from "antd";

// Definimos un componente funcional llamado ThemeProvider que toma un prop 'children'
function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Configuramos el tema del ConfigProvider con colores y estilos personalizados */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1B4242",
            borderRadius: 2,
          },
          components: {
            Button: {
              controlHeight: 40,
              boxShadow: "none",
              colorPrimaryActive: "#1B4242",
              controlOutline: "none",
              colorBorder: "#1B4242",
            },
            Input: {
              controlHeight: 45,
              boxShadow: "none",
              activeShadow: "none",
            },
            Select: {
              controlHeight: 45,
              boxShadow: "none",
              controlOutline: "none",
            },
            InputNumber: {
              controlHeight: 45,
              boxShadow: "none",
              activeShadow: "none",
            },
          },
        }}
      >
        {/* Renderizamos los componentes hijos que se pasan como prop 'children' */}
        {children}
      </ConfigProvider>
    </div>
  );
}

export default ThemeProvider;
