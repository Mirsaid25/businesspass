
export interface Car {
  id: number;
  mark: {
    id: number,
    name: string
  };
  model: string;
  description: string;
  price: number;
  gas: number;
  speed: number;
  year: number;
  mileage: number;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  images: {
    id: number,
    url: string,
    carId: number,
  }[],
  category: any; // Assuming category can be of any type
}

export interface DataResponse {
  page: number;
  total: number;
  data: Car[];
}

export interface CarById {
  data: {
    id: number,
    mark: string,
    model: string,
    description: string,
    price: number,
    gas: number,
    speed: number,
    year: number,
    mileage: number,
    categoryId: number,
    images: any
    category: {
      id: number,
      title: string,
    }
  }
}

export interface Category {
  data:
  {
    id: number;
    title: string,
  }[]

};

// Posters
export interface Posters {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface PostersDataResponse {
  page: number;
  count: number;
  data: Posters[];
}

// Banners
export interface Banners {
  id: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface BannersDataResponse {
  data: Banners[];
}

// config

export interface Config {
  data: [
    {
      id: number,
      priceMin: number,
      priceMax: number,
      yearMin: number,
      yearMax: number,
      mileageMin: number,
      mileageMax: number,
      speedMin: number,
      speedMax: number,
      gasMax: number,
      gasMin: number,
    }
  ]
}

// marks

export interface Mark {
  id: number,
  name: string,
  images: {
    id: number,
    url: string,
  }
}

export interface Marks {
  total: number,
  data: Mark[]
}

// searchQueryParams

export interface SearchParams {
  markId?: number,
  model?: string,
  categoryId?: number,
  priceMin?: number,
  priceMax?: number,
  year?: number,
  mileageMin?: number,
  mileageMax?: number,
  speedMin?: number,
  speedMax?: number,
  gasMax?: number,
  gasMin?: number
}

// favorite-cars

export interface FavoriteCars {
  total: number,
  data: [
    {
      id: number,
      model: string,
      description: string,
      price: number,
      gas: number,
      speed: number,
      year: number,
      mileage: number,
      categoryId: number,
      markId: number,
      category: {
        id: number,
        title: string,
      },
      images:
      {
        id: number,
        url: string,
      }[]
      mark: {
        id: number,
        name: string,
      }
    }
  ]
}

