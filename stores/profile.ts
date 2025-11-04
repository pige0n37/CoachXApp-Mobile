import { create } from 'zustand';

interface Profile {
    goal: string;
    name: string;
    age: number;
    weight: number;
    height: number;
    fatPercentage: number;

    setGoal: (goal: string) => void;
    setName: (name: string) => void;
    setAge: (age: number) => void;
    setWeight: (weight: number) => void;
    setHeight: (height: number) => void;
    setFatPercentage: (fatPercentage: number) => void;
}

const useProfileStore = create<Profile>((set) => ({
    goal: '',
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    fatPercentage: 0,
    setGoal: (goal) => set({ goal }),
    setName: (name) => set({ name }),
    setAge: (age) => set({ age }),
    setWeight: (weight) => set({ weight }),
    setHeight: (height) => set({ height }),
    setFatPercentage: (fatPercentage) => set({ fatPercentage }),
}));

export default useProfileStore;