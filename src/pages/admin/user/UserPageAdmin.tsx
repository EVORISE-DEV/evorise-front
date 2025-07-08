import { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser, IUser } from '../../../services/user/UserTestService.tsx';
import React from 'react';

import './UserPageAdmin.css'; // Import do CSS module

export function UserPageAdmin() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Para capturar dados do formulário (exemplo)
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Carrega a lista de usuários ao montar o componente
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await getUsers();
        setUsers(result);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Função que chama a função createUser do service
  async function handleCreateUser() {
    if (!name || !surname || !email || !password || !confirmPassword) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      setLoading(true);
      const newUser: IUser = {
        name,
        surname,
        email,
        password,
        confirmPassword,
      };

      const createdUser = await createUser(newUser);

      // Atualiza a lista de usuários com o novo usuário criado
      setUsers((prev) => [...prev, createdUser]);

      // Limpa os campos do formulário
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      alert(`Usuário ${createdUser.name} criado com sucesso!`);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Falha ao criar usuário!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h2>Lista de Usuários</h2>

      {loading && <p>Carregando...</p>}
      <div className="formContainer">
        <h3>Criar Novo Usuário</h3>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={"inputField"}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className={"inputField"}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={"inputField"}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={"inputField"}
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={"inputField"}
        />

        <button onClick={handleCreateUser} className={"createButton"}>
          Criar Usuário
        </button>
      </div>

      <hr />

      <h3>Usuários Cadastrados:</h3>
      <ul className={"userList"}>
        {users.map((user) => (
          <li key={user.id}>
            <strong>
              {user.name} {user.surname}
            </strong>{' '}
            - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPageAdmin;
