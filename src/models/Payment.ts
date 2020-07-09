export default interface Payment{
    Description: string;
    TransactionAmount: number;
    cardNumber: string;
    HolderName: string;
    ExpirationMonth: number;
    ExpirationYear: number;
    SecurityCode: number;
    Installments: number;
    docType: string;
    docNumber: number;
    Email: string;
}