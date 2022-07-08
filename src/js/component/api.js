export async function getTodos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/sharpsight44"
	);
	const payload = await response.json();

	return payload;
}

export async function createTodo() {
	await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/sharpsight44",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify([]),
		}
	);
}

export async function updateList(list) {
	const update = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/sharpsight44",
		{
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(list),
		}
	);
	return update;
}

export async function deleteTodo() {
	await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/sharpsight44",
		{ method: "DELETE" }
	);
}
