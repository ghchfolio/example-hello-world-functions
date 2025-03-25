import type { Context } from "@netlify/functions";

const todos = [
    { id: 1, title: "Get bread", isDone: true },
    { id: 2, title: "Get milk", isDone: true },
    { id: 3, title: "Get butter", isDone: false },
];

export default async (req: Request, context: Context) => {
    return Response.json({ data: todos });
}
// http://localhost:8888/.netlify/functions/todos
// http://localhost:8888/api/todos
// https://docs.netlify.com/functions/get-started/?fn-language=ts#prepare-project
// https://search.brave.com/search?q=netlify+function+return+json+response&source=desktop&summary=1&conversation=0bcb20ff86ffc8294ea32a