import { Note } from '@/types';

export const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Project Planning',
    content: '# Project Planning\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T14:22:00Z',
    user_id: 'user-1',
    tags: ['work', 'planning']
  },
  {
    id: '2',
    title: 'Meeting Notes',
    content: '# Weekly Team Meeting\n\n## Agenda\n- Review last week\'s progress\n- Discuss upcoming features\n- Plan next sprint',
    created_at: '2024-01-14T09:15:00Z',
    updated_at: '2024-01-14T11:45:00Z',
    user_id: 'user-1',
    tags: ['meetings', 'work']
  },
  {
    id: '3',
    title: 'Recipe Ideas',
    content: '# Dinner Recipes\n\n## Italian Night\n- Pasta Carbonara\n- Margherita Pizza\n- Tiramisu\n\n## Asian Fusion\n- Pad Thai\n- Sushi rolls',
    created_at: '2024-01-13T16:20:00Z',
    updated_at: '2024-01-13T18:30:00Z',
    user_id: 'user-1',
    tags: ['personal', 'cooking']
  },
  {
    id: '4',
    title: 'Book Recommendations',
    content: '# Reading List\n\n## Fiction\n- The Seven Husbands of Evelyn Hugo\n- Project Hail Mary\n\n## Non-Fiction\n- Atomic Habits\n- The Psychology of Money',
    created_at: '2024-01-12T14:10:00Z',
    updated_at: '2024-01-12T16:25:00Z',
    user_id: 'user-1',
    tags: ['personal', 'books']
  },
  {
    id: '5',
    title: 'Travel Itinerary',
    content: '# Japan Trip 2024\n\n## Tokyo (3 days)\n- Shibuya Crossing\n- Senso-ji Temple\n- Tokyo Skytree\n\n## Kyoto (2 days)\n- Fushimi Inari Shrine\n- Bamboo Grove',
    created_at: '2024-01-11T11:45:00Z',
    updated_at: '2024-01-11T13:20:00Z',
    user_id: 'user-1',
    tags: ['travel', 'personal']
  },
  {
    id: '6',
    title: 'Code Snippets',
    content: '# Useful Code Snippets\n\n## React Hook for Local Storage\n```javascript\nconst useLocalStorage = (key, initialValue) => {\n  // Implementation here\n};\n```',
    created_at: '2024-01-10T09:30:00Z',
    updated_at: '2024-01-10T15:45:00Z',
    user_id: 'user-1',
    tags: ['development', 'code']
  }
];