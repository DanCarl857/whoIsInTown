export type ArtistMetadataType = {
    artist_optin_show_phone_number: boolean;
    facebook_page_ur: string;
    id: string;
    image_url: string;
    links: [string];
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
}

export type EventMetadataType = {
    id: string;
    artist_id: string;
    url: string;
    on_sale_datetime: string;
    datetime: string;
    description: string;
    venue: VenueMetadata;
    offers: [OfferMetadata];
    lineup: [string];
}

export type VenueMetadata = {
    name: string;
    latitude: string;
    longitude: string;
    city: string;
    region: string;
    country: string;
}

export type OfferMetadata = {
    type: string;
    url: string;
    status: string;
}