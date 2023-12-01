export type ArtistMetadataType = {
    artist_optin_show_phone_number: boolean;
    facebook_page_ur: string;
    id: string;
    image_url: string;
    links: [LinkObjectType];
    mbid: string;
    name: string;
    options: {
        display_listen_unit: boolean;
    };
    show_multi_ticket: boolean;
    support_url: string;
    thumb_url: string;
    tracker_count: number;
    tracking: [];
    upcoming_event_count: number;
    url: string;
    error?: string;
}

export type LinkObjectType = {
    type: string;
    url: string;
}

export type EventMetadataType = {
    id: string;
    artist?: ArtistMetadataType;
    artist_id: string;
    url: string;
    on_sale_datetime: string;
    datetime: string;
    description: string;
    venue: VenueMetadata;
    offers: [OfferMetadata];
    lineup: [string];
    title?: string;
    starts_at?: string;
}

export type VenueMetadata = {
    name: string;
    latitude: string;
    longitude: string;
    city: string;
    region: string;
    country: string;
    street_address?: string;
}

export type OfferMetadata = {
    type: string;
    url: string;
    status: string;
}