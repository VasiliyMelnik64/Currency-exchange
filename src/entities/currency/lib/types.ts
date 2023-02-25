export type CurrencyResponse = {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
};

export type CurrencyData = {
  data: CurrencyResponse[];
};

export type Currency = {
  id: number;
  login: string;
  url: string;
  avatarUrl: string;
  htmlUrl: string;
};
