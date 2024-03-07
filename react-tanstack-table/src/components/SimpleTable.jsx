import { useState } from 'react';
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	getPaginationRowModel,
	getSortedRowModel,
} from '@tanstack/react-table';
import data from '../MOCK_DATA.json';
import dayjs from 'dayjs';

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
		{ header: 'Nombre Completo', accessorFn: (row) => `${row.name} ${row.last_name}` },
		{
			header: 'mail y país',
			columns: [
				{ header: 'Email', accessorKey: 'email', footer: 'my email' },
				{ header: 'Country', accessorKey: 'country', footer: 'my country' },
			],
		},

		{
			header: 'Fecha de nacimiento',
			accessorKey: 'dateOfBirth',
			footer: 'my day of birth',
			cell: (info) => dayjs(info.getValue()).format('DD/MM/YYYY'),
		},
	];

	const [sorting, setSorting] = useState([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: { sorting },
		onSortingChange: setSorting,
	});
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
								<th key={header.id} onClick={header.column.getToggleSortingHandler()}>
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.header, header.getContext())}
									{header.column.getIsSorted()
										? header.column.getIsSorted() === 'asc'
											? '🔼'
											: '🔽'
										: null}
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
									{footer.isPlaceholder
										? null
										: flexRender(footer.column.columnDef.header, footer.getContext())}
								</th>
							))}
						</tr>
					))}
				</tfoot>
			</table>
			<button onClick={() => table.setPageIndex(0)}>primera página</button>
			<button onClick={() => table.previousPage()}>página anterior</button>
			<button onClick={() => table.nextPage()}>página siguiente</button>
			<button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>última página</button>
		</div>
	);
};

export default SimpleTable;
