// stores/useModalStore.ts
import { Product } from '@/types/product';
import { create } from 'zustand';

export type ModalType = 'PRODUCT_MODAL' | null


interface ModalState {
    modalType: ModalType;
    isOpen: boolean;
    product: Product | null

    openProductModal: (product: Product) => void;
    closeModal: () => void;

}

const useModalStore = create<ModalState>((set) => ({
    modalType: null,
    isOpen: false,
    product: null,
    openProductModal: (product) => set({ modalType: "PRODUCT_MODAL", isOpen: true, product }),
    closeModal: () => set({ modalType: null, isOpen: false, product: null }),

}))

export default useModalStore;