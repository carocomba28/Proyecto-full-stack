export class Note {
    id: number;
    title: string;
    description: string;
    category: string;
    archived: boolean;

    constructor() {
      this.id = 0;
      this.title = '';
      this.description = '';
      this.category = '';
      this.archived = false;
    }

  }
  