"use server";
import axios from "axios";
import { cookies } from "next/headers";

export async function getData(path: string, withToken?: boolean) {
	try {

		if (withToken) {
			const token: any = cookies()?.get("userToken")?.value;

			if (!token) {
				return { token: false }
			}

			const { data } = await axios(process.env.NEXT_PUBLIC_API_URL + path, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return data;
		} else {

			const { data } = await axios(process.env.NEXT_PUBLIC_API_URL + path, {
				method: "GET"
			});

			return data;
		}


	} catch (e) {
		console.log("get error");

		return { e }
	}
}

export async function postData(path: string, body: any, withToken?: boolean) {
	try {
		if (withToken) {
			const token: any = cookies()?.get("userToken")?.value;

			const { data } = await axios(process.env.NEXT_PUBLIC_API_URL + path, {
				method: "post",
				data: body,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log('posted', data.data);

			return data;
		} else {

			const { data } = await axios(process.env.NEXT_PUBLIC_API_URL + path, {
				method: "post",
				data: body,
			});

			return data;
		}

	} catch (e) {
		console.log(e);
		return { e }
	}
}

export async function deleteData(path: string, withToken?: boolean) {
	try {

		if (withToken) {
			const theme: any = cookies()?.get("userToken")?.value;
			const token = JSON.parse(theme).token

			const { data } = await axios(process.env.NEXT_PUBLIC_API_URL + path, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return data;
		} else {
			const theme: any = cookies()?.get("token")?.value;
			const token = JSON.parse(theme).token

			const { data } = await axios(process.env.NEXT_PUBLIC_API_URL + path, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return data;
		}

	} catch (e) {
		console.log(e);
	}
}
