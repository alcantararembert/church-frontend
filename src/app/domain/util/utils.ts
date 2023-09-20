export function formatTime(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

export function getCurrentDateTime(): string {
	const myDate = new Date();

	const year = myDate.getFullYear();
	const month = String(myDate.getMonth() + 1).padStart(2, '0');
	const day = String(myDate.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}