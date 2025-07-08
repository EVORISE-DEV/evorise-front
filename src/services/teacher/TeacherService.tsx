import axios from 'axios';
import {IUser} from '../user/UserTestService.tsx'
import { IContent } from '../content/ContentService.tsx';


const baseURL = 'http://localhost:3333';

// Interfaces para os modelos relacionados


export interface ITeacher {
  id?: string;
  user_id: string;
  content_id?: number | null;
  // As propriedades abaixo são opcionais, pois elas são trazidas por meio do relacionamento
  user?: IUser;
  content?: IContent;
}

// Se a aplicação utilizar autenticação, você pode descomentar e utilizar esta função para incluir os headers:
// const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return { headers: { Authorization: `Bearer ${token}` } };
// };

/**
 * 1) Listar todos os professores
 */
export async function getTeachers(): Promise<ITeacher[]> {
  try {
    const response = await axios.get<ITeacher[]>(`${baseURL}/teachers`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar professores:', error.response?.data?.error || error);
    throw error;
  }
}

/**
 * 2) Cadastrar um novo professor
 * @param teacherData Dados do professor para cadastro
 */
export async function createTeacher(teacherData: ITeacher): Promise<ITeacher> {
  try {
    const response = await axios.post<ITeacher>(`${baseURL}/teachers`, teacherData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar professor:', error.response?.data?.error || error);
    throw error;
  }
}

/**
 * 3) Atualizar um professor existente
 * @param id Identificador do professor
 * @param teacherData Dados para atualização do professor
 */
export async function updateTeacher(id: string, teacherData: Partial<ITeacher>): Promise<ITeacher> {
  try {
    const response = await axios.put<ITeacher>(`${baseURL}/teachers/${id}`, teacherData);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao atualizar professor:', error.response?.data?.error || error);
    throw error;
  }
}

/**
 * 4) Deletar um professor
 * @param id Identificador do professor
 */
export async function deleteTeacher(id: string): Promise<{ message: string }> {
  try {
    const response = await axios.delete<{ message: string }>(`${baseURL}/teachers/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao deletar professor:', error.response?.data?.error || error);
    throw error;
  }
}

/**
 * 5) Buscar professores por conteúdo
 * @param contentId Identificador do conteúdo
 */
export async function searchTeachersByContent(contentId: string): Promise<ITeacher[]> {
  try {
    const response = await axios.get<ITeacher[]>(`${baseURL}/teachers/content/${contentId}`);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar professores por conteúdo:', error.response?.data?.error || error);
    throw error;
  }
}
