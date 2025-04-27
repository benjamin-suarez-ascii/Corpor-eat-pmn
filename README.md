# 🍽️ CorporEat - PMN (Prototipo Mínimo Navegable)  

**Sistema de Gestión de Reservas para Comedores Corporativos**  

---

## **🚀 Demo en Vivo**  
🔗 [Ver despliegue en Vercel](https://corpor-eat-pmn.vercel.app)  

---

## **📌 Descripción**  
Prototipo funcional de una aplicación para que empleados de empresas reserven mesas en comedores corporativos. Desarrollado con **Vue 3 + Vite**, incluye:  
- 4 vistas navegables (Home, Login, Mis Reservas, Hacer Reserva)  
- Barra de navegación interactiva  
- Simulación de reservas y autenticación  
- Diseño responsivo  

---

## **🛠️ Tecnologías**  
| Tecnología | Uso |  
|------------|-----|  
| Vue 3 | Framework frontend |  
| Vue Router | Navegación SPA |  
| Vite | Bundler y servidor de desarrollo |  
| CSS3 | Estilos personalizados |  
| Vercel | Despliegue automático |  

---

## **🗺️ Diagrama de Navegación**
```mermaid
flowchart TB
    A[Página de Inicio] -->|Todos| B[Login/Registro]
    A -->|Autenticado| C[Mis Reservas]
    A -->|Autenticado| D[Hacer Reserva]
    A -->|Admin| E[Panel Admin]
    B -->|Login exitoso| A
    C -->|Ver detalles| F[Detalle Reserva]
    C -->|Cancelar| A
    D -->|Confirmar| G[Pago Simulado]
    G -->|Éxito| C
    E --> H[Gestión de Usuarios]
    E --> I[Reportes]
    E --> J[Configuración]
    
    style A fill:#42b983,color:white
    style B fill:#2c3e50,color:white
    style C fill:#2c3e50,color:white
    style D fill:#2c3e50,color:white
    style E fill:#ff4444,color:white
    style F fill:#f0ad4e,color:black
    style G fill:#f0ad4e,color:black
    style H fill:#5bc0de,color:black
    style I fill:#5bc0de,color:black
    style J fill:#5bc0de,color:black
    
    classDef user fill:#2c3e50,color:white
    classDef admin fill:#ff4444,color:white
    classDef action fill:#f0ad4e,color:black
    classDef submenu fill:#5bc0de,color:black
    
    class A,B,C,D user
    class E admin
    class F,G action
    class H,I,J submenu