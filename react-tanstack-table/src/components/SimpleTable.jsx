import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import data from '../MOCK_DATA.json';

const SimpleTable = () => {
	// {
	// 	"id": 1,
	// 	"name": "Brittani",
	// 	"last_name": "Patriskson",
	// 	"email": "bpatriskson0@stumbleupon.com",
	// 	"country": "Malaysia",
	// 	"dateOfBirth": "10/23/2023"
	// },
	const columns = [
		{ header: 'ID', accessorKey: 'id', footer: 'my id' },
		{ header: 'Name', accessorKey: 'name', footer: 'my name' },
		{ header: 'Lastname', accessorKey: 'last_name', footer: 'my Lastname' },
		{ header: 'Email', accessorKey: 'email', footer: 'my email' },
		{ header: 'Country', accessorKey: 'country', footer: 'my country' },
		{ header: 'Fecha de nacimiento', accessorKey: 'dateOfBirth', footer: 'my day of birth' },
	];

	const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
	return (
		<div>
			<table>
				<thead>
					{/* <tr>
						<th>ID</th>
					</tr> */}
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{/* <tr>
						<td>1</td>
					</tr> */}
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
				<tfoot>
					{/* <tr>
						<td>id</td>
					</tr> */}
					{table.getFooterGroups().map((footerGroup) => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map((footer) => (
								<th key={footer.id}>
									{flexRender(footer.column.columnDef.footer, footer.getContext())}
								</th>
							))}
						</tr>
					))}
				</tfoot>
			</table>
		</div>
	);
};

export default SimpleTable;
