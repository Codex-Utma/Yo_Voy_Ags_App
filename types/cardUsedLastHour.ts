export interface UsedLastHourType {
    id: number;
    createdAt: string;
    Bus: {
      id: number;
      Route: {
        name: string;
      };
    };
}
