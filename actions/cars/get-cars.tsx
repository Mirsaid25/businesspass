import { DataResponse } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/cars`;

const getCars = async (
    page: number,
    searchParams: any
): Promise<DataResponse> => {
    let queryUrl = "";

    for (let item in searchParams) {
        queryUrl += `&${item}=${searchParams[item]}`;
    }

    const res = await fetch(`${URL}?page=${page}${queryUrl}`);

    return res.json();
};

export default getCars;
