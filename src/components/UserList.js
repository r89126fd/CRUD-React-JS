import { Table, Button } from 'react-bootstrap';

export default function UserList({ users, onEdit, onDelete }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <img src={user.avatar} alt="Avatar" style={{ width: '50px' }} />
            </td>
            <td>
              <Button variant="warning" onClick={() => onEdit(user)}>
                Editar
              </Button>{' '}
              <Button variant="danger" onClick={() => onDelete(user.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
