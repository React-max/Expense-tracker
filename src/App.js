import Expenses from "./components/Expenses/Expenses";

const expenses = [
	{
		id: "e1",
		title: "Health ins",
		amount: 143.99,
		date: new Date(2023, 10, 23),
	},
	{
		id: "e2",
		title: "Car Insurance",
		amount: 200.5,
		date: new Date(2021, 8, 3),
	},
	{
		id: "e3",
		title: "ABCD",
		amount: 234,
		date: new Date(2025, 9, 12),
	},
	{
		id: "e4",
		title: "EFGH",
		amount: 243.12,
		date: new Date(2022, 4, 20),
	},
];

function App() {
	return (
		<div>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
