import React from 'react';
import { tableHeaders } from '../../../utils/userDetails';
import { BsThreeDotsVertical } from 'react-icons/bs';
import TableHook from './Hook/TableHook';
import Modal from './FilterModal';
import OptionsModal from './OptionsModal';
import { useSelector } from 'react-redux';
import { UserProps } from '../../../interfaces/typings';
import Pagination from '../../Shared/Pagination';

const Table = () => {
	const { showFilterModal, setShowFilterModal, showOptionsModal, setShowOptionsModal, handlePageChange } = TableHook();
	const [activeRow, setActiveRow] = React.useState<null | string>(null);
	const { filteredUsers, users, currentPage, totalPages, pageSize } = useSelector((state: any) => state.counter);

	return (
		<div>
			<div className='table-responsive'>
				<table className='custom-table'>
					<thead>
						<tr>
							{tableHeaders.map((header, index) => {
								return (
									<th key={index}>
										<div className='filter_container'>
											{header}
											<img src='/assets/icons/users/filter-button.png' alt='filter' className='filter-icon' onClick={() => setShowFilterModal(true)} />
										</div>
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody className='table-body'>
						{filteredUsers?.map((user: UserProps) => {
							return (
								<tr key={user.id} className='table-data-row'>
									<td>{user.organization}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone_number}</td>
									<td>{user.date_joined}</td>
									<td>
										<span className={`${user.status.toLowerCase() === 'active' ? 'active-bg' : user.status.toLowerCase() === 'inactive' ? 'inactive-bg' : user.status.toLowerCase() === 'blacklisted' ? 'blacklisted-bg' : user.status.toLowerCase() === 'pending' ? 'pending-bg' : ''}`}>{user.status}</span>
									</td>
									<td>
										<BsThreeDotsVertical
											size={20}
											onClick={() => {
												setActiveRow(user.id);
												setShowOptionsModal(true);
											}}
											cursor='pointer'
										/>
										<div className={`${showOptionsModal && activeRow === user.id ? 'options-modal' : 'hide-modal'}`}>
											<OptionsModal id={user.id} setShowOptionsModal={setShowOptionsModal} />
										</div>
									</td>
								</tr>
							);
						})}
						<tr className={`${showFilterModal ? 'filter-modal' : 'hide-modal'}`}>
							<td colSpan={3}>
								<Modal setShowFilterModal={setShowFilterModal} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Pagination totalItems={users.length} currentPage={currentPage} itemsPerPage={pageSize} totalPages={totalPages} onPageChange={handlePageChange} />
		</div>
	);
};
export default Table;
