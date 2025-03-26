interface Transfer {
    Bus: {
        id: number;
        Route: {
            name: string;
        };
    };
}

export interface CardUseType {
    amount: number;
    createdAt: string;
    Transfer?: Transfer;
}

export interface CardDataType {
    cardId: number;
    balance: number;
    isPreferential: boolean;
    cardUses: CardUseType[];
}
