export interface Article {
    id: string;
    revision: string;
    name: string;
    description: string;
    text_pt: string;
    text_en: string;
    tags: string[];
    updated_at: string;
}

export interface Articles {
    articles: Array<Article>
}

