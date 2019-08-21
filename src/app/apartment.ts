export interface Apartment {
  _id?: string;
  description?: string;
  originalLink?: string;
  listedAt?: Date;
  expiresAt?: Date;
  status?: string;
  key?: string;
  comment?: string;
  source?: string;
}

export interface ApartmentListing {
  data: Apartment[];
  meta: {
    pages: number,
    total: number,
    pageSize: number,
  };
}
