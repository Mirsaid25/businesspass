import { CarById } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cars`

const getCarById = async (id:number) :Promise<CarById>=> {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
}

export default getCarById;