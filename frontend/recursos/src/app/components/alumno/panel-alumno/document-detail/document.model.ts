export class Document{
    id: number;
    name: string;
    status: string;
    documentType: string;
    uploadDate: Date;
    validated: boolean;
    comments: string[]; 
}