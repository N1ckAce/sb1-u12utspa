export interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  tags?: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  created_at: string;
}

export interface NotesViewMode {
  mode: 'grid' | 'list';
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}