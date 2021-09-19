export interface SaveUser {
    profile_id: number;
    document_type_id: number;
    document_number: number;
    first_name: string;
    second_name?: string;
    first_lastname: string;
    second_lastname?: string;
    email: string;
    password: string;
    phone: string;
}