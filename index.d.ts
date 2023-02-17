export function formatDate(date: Date | number | string): string;
export function isValidateEmail(value: string): string;

declare module 'demo-publish-npm/user' {
    // import user from './user';
    export interface User {
        id: string;
        name: string
    }
    // const CKEditor: React.FunctionComponent<{
    //     disabled?: boolean;
    //     editor: typeof ClassicEditor;
    //     data?: string;
    //     id?: string;
    //     config?: EditorConfig;
    //     onReady?: (editor: ClassicEditor) => void;
    //     onChange?: (event: Event, editor: ClassicEditor) => void;
    //     onBlur?: (event: Event, editor: ClassicEditor) => void;
    //     onFocus?: (event: Event, editor: ClassicEditor) => void;
    //     onError?: (event: Event, editor: ClassicEditor) => void;
    // }>
    // export { CKEditor };
}
