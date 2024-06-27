import create from 'zustand';

const useStore = create((set) => ({
  comments: [],
  setComments: (comments) => set({ comments }),
}));

export default useStore;
