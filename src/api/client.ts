import axios from "axios";

export async function clientAPI(
  method: string,
  url: string,
  form?: object,
  functionReject?: (error: any) => void
) {
  try {
    if (method === "post") {
      const date = await axios.post(url, form);
      const response = await date;

      if (response.status !== 200) {
        throw Error("Error...");
      }

      return response;
    } else {
      const date = await axios.get(url);
      const response = await date;

      if (response.status !== 200) {
        throw Error("Error...");
      }

      return response;
    }
  } catch (err) {
    if (err instanceof Error && functionReject) {
      functionReject(err.message);
    }
  }
}
