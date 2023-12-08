// VentasList.tsx
import useGetAllVentas from '../../hook/venta/useGetAllVentas';

const VentasList = () => {
    const { ventas, error } = useGetAllVentas();

    if (error) {
        return <div>Error al cargar las ventas: {error.message}</div>;
    }

    return (
        <div>
            <h2>Lista de Ventas</h2>
            <ul>
                {ventas.map((venta, index) => (
                    <li key={index}>
                        <p>Fecha: {venta.fecha}</p>
                        <p>Total: {venta.total}</p>
                        <p>ID Usuario: {venta.id_usuario}</p>
                        <p>ID Cliente: {venta.id_cliente}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VentasList;
