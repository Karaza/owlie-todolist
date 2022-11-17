import { defineStore } from "pinia";

export const useNotesStore = defineStore("notesStore", {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          title: "Title 1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atquesuscipit in aperiam veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atquesuscipit in aperiam veniam.",
          done: false,
          expanded: false,
        },
        {
          id: 2,
          title: "Title 2",
          content:
            "Reprehenderit mollitia, illo officia facere tenetur est repellat Reprehenderit mollitia, illo officia facere tenetur est repellat Reprehenderit mollitia, illo officia facere tenetur est repellat",
          done: true,
          expanded: true,
        },
        {
          id: 3,
          title: "Title 3",
          content:
            "Repellendus soluta at nemo minus, molestiae doloremque Repellendus soluta at nemo minus, molestiae doloremque Repellendus soluta at nemo minus, molestiae doloremque.",
          done: false,
          expanded: false,
        },
      ],
    };
  },
  actions: {
    addNote(newNoteTitle: string) {
      let note = {
        id: new Date().getTime(), // could use uuid instead, timestamp for simplicity for now
        title: newNoteTitle,
        content: "Note vide pour le moment, cliquez pour éditer",
        done: false,
        expanded: false,
      };

      this.notes.unshift(note);
    },
  },
});
