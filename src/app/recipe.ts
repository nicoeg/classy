export class Recipe {
        public publisher: string;
        public f2f_url: string;
        public ingredients: Array<string>;
        public source_url: string;
        public _id: string;
        public image_url: string;
        public social_rank: number;
        public publisher_url: string;
        public title: string;
        public reviews?: Array<Review>;
}
class Review {
    public name: string;
    public email: string;
    public comment: string;
    public posted: Date;
    public rating: number;
}
