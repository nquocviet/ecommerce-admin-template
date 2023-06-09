import React from 'react'
import { ActionIcon, Avatar, Box, Flex, Menu, Paper } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'
import { useRouter } from 'next/router'

import { CUSTOMER_ORDERS_COLUMNS } from '@/columns/customer'
import {
	BoxContent,
	Dots,
	JSONView,
	Loader,
	PageTitle,
	Table,
} from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { CUSTOMER_TABS } from '@/constants/tabs'
import { DetailsLayout } from '@/layouts'
import { useCustomerDetails } from '@/lib/customer'
import {
	DeleteCustomerModal,
	EditCustomerModal,
} from '@/page-components/customers/components'
import { ROUTES } from '@/routes'
import { formatDate } from '@/utils'

const CustomerDetails = () => {
	const router = useRouter()
	const [
		editCustomerOpened,
		{ open: openEditCustomer, close: closeEditCustomer },
	] = useDisclosure(false)
	const [
		deleteCustomerOpened,
		{ open: openDeleteCustomer, close: closeDeleteCustomer },
	] = useDisclosure(false)
	const { data, isLoading } = useCustomerDetails()

	if (isLoading || !data) return <Loader />

	return (
		<DetailsLayout
			label="Back to customers"
			href={{
				pathname: ROUTES.CUSTOMERS,
				query: { tab: CUSTOMER_TABS.CUSTOMERS },
			}}
		>
			<Paper shadow="xs" p="xl">
				<Box className="-mx-6 mb-16 -mt-6 overflow-hidden rounded-t">
					<Box className="h-32 w-full bg-gradient-to-b from-primary-300 to-white"></Box>
				</Box>
				<Avatar
					size="lg"
					radius="xl"
					variant="filled"
					className="mb-4 child:bg-primary-400"
				>
					{data.first_name.slice(0, 1).toUpperCase()}
				</Avatar>
				<PageTitle
					order={2}
					size="sm"
					title={`${data.first_name} ${data.last_name}`}
					description={data.email}
					action={
						<Menu shadow="md" width={200}>
							<Menu.Target>
								<ActionIcon>
									<DotsThree size={20} weight="bold" />
								</ActionIcon>
							</Menu.Target>
							<Menu.Dropdown>
								<Menu.Item
									icon={<NotePencil size={20} />}
									onClick={openEditCustomer}
								>
									Edit customer
								</Menu.Item>
								<Menu.Item
									icon={<Trash size={20} />}
									sx={{
										color: 'var(--red-600)',
									}}
									onClick={openDeleteCustomer}
								>
									Delete
								</Menu.Item>
							</Menu.Dropdown>
						</Menu>
					}
				/>
				<Flex className="mt-6">
					<BoxContent
						title="First seen"
						description={formatDate(data.created_at)}
					/>
					<BoxContent title="Phone" description={data.phone} />
					<BoxContent title="Orders" description={data.orders.length} />
					<BoxContent
						title="User"
						description={
							<Flex align="center" gap={6}>
								<Dots size={6} color={data.has_account ? 'green' : 'gray'} />
								{data.has_account ? 'True' : 'False'}
							</Flex>
						}
						lastItem
					/>
				</Flex>
			</Paper>
			<Paper shadow="xs" p="xl">
				<PageTitle
					order={2}
					size="sm"
					title={`Orders (${data.orders.length})`}
					description="An overview of Customer Orders"
				/>
				<Table
					records={data.orders}
					columns={CUSTOMER_ORDERS_COLUMNS}
					fetching={isLoading}
					minHeight={500}
					className="mt-8"
					totalRecords={data.orders.length}
					recordsPerPage={PAGE_SIZE}
					page={1}
					onPageChange={() => null}
					onRowClick={({ id }) =>
						router.push({
							pathname: ROUTES.ORDER_DETAILS,
							query: { id },
						})
					}
					highlightOnHover
				/>
			</Paper>
			<Paper shadow="xs" p="xl">
				<PageTitle order={2} size="sm" title="Raw customer" />
				<JSONView data={data} className="mt-4" />
			</Paper>
			<EditCustomerModal
				opened={editCustomerOpened}
				onClose={closeEditCustomer}
			/>
			<DeleteCustomerModal
				opened={deleteCustomerOpened}
				onClose={closeDeleteCustomer}
			/>
		</DetailsLayout>
	)
}

export default CustomerDetails
