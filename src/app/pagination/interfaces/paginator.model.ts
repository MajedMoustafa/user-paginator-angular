export interface PageInfo {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
}

export interface SingleUser {
  data: UserData;
}

export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
