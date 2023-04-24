export interface Category{
  id:string;
  name: string;
  typeImg: string;
}

export interface Product{
  id:string;
  price: number;
  title:string;
  images:string[];
  description:string;
  category:Category;
}
