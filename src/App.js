import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getUsers, createUser, updateUser, deleteUser } from './services/userService';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Alerts from './components/Alerts';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '' });

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateOrUpdate = async (user) => {
    if (editingUser) {
      await updateUser(editingUser.id, user);
      setAlert({ show: true, message: 'Usuario actualizado correctamente' });
    } else {
      await createUser(user);
      setAlert({ show: true, message: 'Usuario creado correctamente' });
    }
    fetchUsers();
    setEditingUser(null);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setAlert({ show: true, message: 'Usuario eliminado correctamente' });
    fetchUsers();
  };

  return (
    <Container>
      <h1>CRUD de Usuarios</h1>
      <UserForm onSubmit={handleCreateOrUpdate} initialData={editingUser} />
      <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />
      <Alerts show={alert.show} message={alert.message} onClose={() => setAlert({ show: false })} />
    </Container>
  );
}

export default App;
