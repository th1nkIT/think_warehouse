import { AxiosResponse } from "axios";
import TokenizedAxios, { Axios } from "../src/assets/api/Api";
import { IPaginationParams, IAPIResponseInfo } from "../types/common-types";
import { IProductAPIResponse, IProductBody } from "../types/product";

const productUrl = `/product`;

const getProduct = (
  params?: IPaginationParams
): Promise<AxiosResponse<IProductAPIResponse>> => {
  return Axios.get(`${productUrl}`, {
    params,
  });
};

const getProductFilter = (
  set_name: boolean,
  name: string
): Promise<AxiosResponse<IProductAPIResponse>> =>
  Axios.post(productUrl, {
    filter: {
      set_name: set_name,
      name: name,
    },
    limit: 10,
    page: 1,
    order: "created_at",
    sort: "DESC",
  });

const createProduct = (product: IProductBody) =>
  TokenizedAxios.post(`${productUrl}`, product);

const updateProduct = (id: string | number, product: IProductBody) =>
  TokenizedAxios.put(`${productUrl}/${id}`, product);

const deleteProduct = (
  id: string | number
): Promise<AxiosResponse<IAPIResponseInfo>> =>
  TokenizedAxios.delete(`${productUrl}/${id}`);

export default {
  getProduct,
  getProductFilter,
  createProduct,
  updateProduct,
  deleteProduct,
};
