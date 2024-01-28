import { IAPIResponseInfo } from "./common-types";

export interface IProduct {
  id: string;
  name: string;
  profile_picture_image_url: string;
  description: string;
  status: string;
}

export interface IProductBody {
  id: string;
  name: string;
  profile_picture_image_url: string;
  description: string;
  status: string;
}

export interface IProductAPIResponse extends IAPIResponseInfo {
  data: {
    items: Array<IProduct>;
    total_count: number;
  };
}
