export class Currency {
    constructor(
        public Id: number,
        public FullName: string,
        public URL: string,
        public Algorithm: string,
        public ProofType: string,
        public SortOrder: number
    ) {}
}
