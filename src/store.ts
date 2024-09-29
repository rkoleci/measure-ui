import { create } from "zustand";

interface Measure {
    typography: boolean;
    setTypography: () => void;
    typographyIds: Array<string>;
    setTypographyIds: (id: string) => void;

    div: boolean;
    setDiv: () => void;
    divIds: Array<string>;
    setDivIds: (id: string) => void;
}

export const useMeasure = create<Measure>((set) => ({
    typography: false,
    setTypography: () => {
        set((state) => ({
            typography: !state.typography
        }))
    },
    typographyIds: [],
    setTypographyIds: (id: string) => {
        set((state) => ({
            typographyIds: [...state.typographyIds, id]
        }))
    },

    div: false,
    setDiv: () => {
        set((state) => ({
            div: !state.div
        }))
    },
    divIds: [],
    setDivIds: (id: string) => {
        set((state) => ({
            divIds: [...state.divIds, id]
        }))
    }
}))
