export const validarProducto = (producto) => {
  const errores = {};

  // Nombre obligatorio
  if (!producto.nombre || producto.nombre.trim().length === 0) {
    errores.nombre = "El nombre es obligatorio";
  } else if (producto.nombre.length < 3) {
    errores.nombre = "El nombre debe tener al menos 3 caracteres";
  }

  // Categoría obligatoria y válida
  const categoriasValidas = ["accesorios", "teclados", "bajos y guitarras", "baterias"];
  if (!producto.categoria || producto.categoria.trim().length === 0) {
    errores.categoria = "La categoría es obligatoria";
  } else if (!categoriasValidas.includes(producto.categoria.toLowerCase())) {
    errores.categoria = `Categoría inválida. Usa: ${categoriasValidas.join(", ")}`;
  }

  // Descripción obligatoria
  if (!producto.descripcion || producto.descripcion.trim().length === 0) {
    errores.descripcion = "La descripción es obligatoria";
  }

  // Detalle obligatorio
  if (!producto.detalle || producto.detalle.trim().length === 0) {
    errores.detalle = "El detalle es obligatorio";
  }

  return errores;
};
