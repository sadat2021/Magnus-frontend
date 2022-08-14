const fetchService:
    ({ url, method, body
    }: {
        url: string; method?: string;
        body?: any;
    }) =>
        Promise<{ data: any, status: number }> =
    async ({ url, method = "GET",
        body
    }) => {
        let status: number;
        const headers: any = {}
        headers["Content-Type"] = "application/json"
        let fetchBody: any;
        if (body) {
            fetchBody = JSON.stringify(body)
        }
        try {
            const response = await fetch(url, {
                method: method,
                headers: headers,
                body: fetchBody
            });
            status = response.status;
            const responseJson = await response.json();
            if (status === 401) {
                return { status: 401, data: {} };
            } else {
                return { status: status, data: responseJson };
            }
        } catch (e) {
            return { status: 500, data: {} };
        }

    }
export { fetchService }