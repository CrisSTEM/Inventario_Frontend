// ClientesPage.tsx
import CreateClienteForm from '../components/cliente/CreateClienteForm';

const ClientesPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl px-5 py-10 bg-white shadow-xl rounded-lg">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Crear Nuevo Cliente</h1>
                <CreateClienteForm />
            </div>
        </div>
    );    
};

export default ClientesPage;
