import apiClient from './client';
import type { Shelf, PaginatedResponse } from '../types/shelf';

export const getShelves = async (params?: { search?: string; page?: number }) => {
  const response = await apiClient.get<PaginatedResponse<Shelf>>('/warehouses/shelves/', { params });
  return response.data;
};