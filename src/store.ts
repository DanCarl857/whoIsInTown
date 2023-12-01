import { create } from "zustand"
import { EventMetadataType } from "./types"

const FAVORITES_LOCALSTORAGE_KEY = "favorites"

interface FavoritesStore {
    favorites: EventMetadataType[]
    updateFavorites: (event: EventMetadataType) => void,
    isFavorited: (event: EventMetadataType) => boolean,
}

function loadFavoritesFromStorage() {
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_LOCALSTORAGE_KEY) || "")
    } catch {
        return []
    }
}

function persistFavoritesToStorage(favorites: EventMetadataType[]) {
    localStorage.setItem(FAVORITES_LOCALSTORAGE_KEY, JSON.stringify(favorites))
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => {
    const updateFavorites = (event: EventMetadataType) => set((state) => {
        let favorites = [...state.favorites];
        let index = favorites.findIndex(a => a.id === event.id)
        if (index < 0) {
            favorites.push(event)
        } else {
            favorites.splice(index, 1)
        }
        persistFavoritesToStorage(favorites)
        return {...state, favorites}
    });

    const isFavorited = (event: EventMetadataType) => !!get().favorites.find(a => a.id === event.id);
    
    return {
        favorites: loadFavoritesFromStorage(),
        updateFavorites,
        isFavorited
    }
})