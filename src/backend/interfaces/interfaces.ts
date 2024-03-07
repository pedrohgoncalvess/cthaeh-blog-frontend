export interface Article {
    id: string;
    revision: string;
    name: string;
    description: string;
    text_pt: string | null;
    text_en: string | null;
    tags: string[];
    published:boolean;
    updated_at: string;
}

export interface Articles {
    articles: Array<Article>
}

