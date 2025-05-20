export interface LinkedInApiResponse {
    success: boolean;
    message: string;
    data: {
        total: number;
        count: number;
        items: LinkedInPost[];
    };
}

export interface LinkedInPost {
    urn: string;
    url: string;
    template: string;
    text: string;
    postedAt: string;
    postedDate: string;
    postedDateTimestamp: number;
    reposted: boolean;
    video: {
        thumbnails: null | any; // You can further type this if needed
        video: null | any;
    };
    image?: {
        url: string;
        width: number;
        height: number;
    }[];
    entity: LinkedInEntity;
    article: LinkedInArticle;
    object: any;
    author: LinkedInAuthor;
    socialActivityCountsInsight: SocialActivityCounts;
    resharedPost?: ResharedPost;
}


export interface LinkedInEntity {
    title?: string;
    subtitle?: string;
    link?: string;
    description?: string;
}

export interface LinkedInArticle {
    title?: string;
    subtitle?: string;
    link?: string;
}

export interface LinkedInAuthor {
    fullName: string;
    headline: string;
    username: string;
    url: string;
    profilePictures: ProfilePicture[];
    type: string;
}

export interface ProfilePicture {
    width: number;
    height: number;
    url: string;
}

export interface SocialActivityCounts {
    numComments: number;
    likeCount: number;
    appreciationCount: number;
    empathyCount: number;
    InterestCount: number;
    praiseCount: number;
    funnyCount: number;
    maybeCount: number;
    totalReactionCount: number;
}

export interface ResharedPost {
    isBrandPartnership: boolean;
    text: string;
    author: {
        firstName: string;
        lastName: string;
        username: string;
        url: string;
    };
    company?: any;
    document?: any;
    celebration?: any;
    poll?: any;
    article?: {
        newsletter?: any;
    };
    entity?: any;
}
