import { ModalOverlayProps } from '../../../';
export interface ModalButtonProps extends Omit<ModalOverlayProps, 'isOpen'> {
    button: string;
    className?: string;
    style?: object;
}
export interface ModalButtonState {
    showModal: boolean;
}
export declare const defaultModalButtonState: ModalButtonState;
