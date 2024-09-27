use master
go

create database products_db
go

use products_db
go
-- Crear la tabla Productos
CREATE TABLE Productos (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    Direccion VARCHAR(255),
    Precio DECIMAL(10, 2),
    cantidad INT,
    proveedores VARCHAR(255)
);

-- Insertar los datos
INSERT INTO Productos (nombre, descripcion, Direccion, Precio, cantidad, proveedores) VALUES
('Monitor Samsung Curved 27"', 'Monitor curvo Full HD con tecnología de pantalla VA, resolución 1920x1080, y 60Hz.', 'Avenida B, Nº 456', 299.99, 5, 'Samsung'),
('Teclado Mecánico Corsair K70', 'Teclado mecánico con switches Cherry MX Red y retroiluminación RGB.', 'Calle C, Nº 789', 129.99, 3, 'Corsair'),
('Mouse Logitech MX Master 3', 'Mouse inalámbrico con sensor láser y múltiples botones personalizables.', 'Avenida D, Nº 101', 99.99, 10, 'Logitech'),
('Silla Gaming DXRacer', 'Silla ergonómica con reposabrazos ajustables, respaldo reclinable, y soporte lumbar.', 'Calle E, Nº 112', 349.99, 4, 'DXRacer'),
('Smartphone Samsung Galaxy S21', 'Smartphone con pantalla AMOLED de 6.2", procesador Exynos 2100, y 8GB RAM.', 'Avenida F, Nº 223', 799.99, 6, 'Samsung'),
('Impresora Epson EcoTank L3150', 'Impresora multifunción con sistema de tinta continua y conectividad WiFi.', 'Calle G, Nº 334', 199.99, 2, 'Epson'),
('Disco Duro Externo Seagate 2TB', 'Disco duro externo portátil USB 3.0 con capacidad de 2TB.', 'Avenida H, Nº 445', 89.99, 8, 'Seagate'),
('Router ASUS RT-AX88U', 'Router WiFi 6 con 8 puertos LAN, velocidad máxima de 6000 Mbps, y tecnología MU-MIMO.', 'Calle I, Nº 556', 299.99, 3, 'ASUS'),
('Proyector BenQ TH685', 'Proyector 1080p con 3500 lúmenes, baja latencia y compatible con HDR.', 'Avenida J, Nº 667', 499.99, 2, 'BenQ'),
('Auriculares Sony WH-1000XM4', 'Auriculares inalámbricos con cancelación de ruido activa y autonomía de hasta 30 horas.', 'Calle K, Nº 778', 349.99, 7, 'Sony');





