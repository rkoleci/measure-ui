import { create } from "zustand";

interface Measure {
    typography: boolean;
    setTypography: () => void;
    typographyIds: Array<string>;
    setTypographyIds: (id: string) => void;
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
    }
}))
