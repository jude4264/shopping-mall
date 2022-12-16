export type Rating ={
    rates : number;
    count : number;
}
export type Product = {
  category : string;
  description: string;
  id : number;
  image : string;
  price : number;
  rating : Rating
  title : string;
};
