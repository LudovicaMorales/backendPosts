export const postValid = {
    body: {
        type: "object",
        required: ["title", "description", "imgUrl", "category"],
        properties: {
            title: {
                type: "string",
                minLength: 4,
            },
            description: {
                type: "string",
                minLength: 10
            },
            imgUrl: {
                type: "string",
                minLength: 10
            },
            date: {
                type: "string"
            },
            category: {
                type: "string"
            }


        }
    }
}