import { Table } from '../src/table';

describe ('Table', () => {
	let instance: Table;

	beforeEach(() => {
		instance = new Table();
	});

	it('should get table from Sheet', () => {
		expect(instance).toBeInstanceOf(Table);
	});
});