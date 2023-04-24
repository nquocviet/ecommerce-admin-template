import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex, Paper, Title, Tooltip } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { Info, Plus } from '@phosphor-icons/react'

import { TAX_DETAIL_COLUMNS } from '@/columns/tax-details'
import { Checkbox, PageTitle, Select, Table } from '@/components'
import { APP_NAME } from '@/constants/common'

import NewTaxRateModal from '../NewTaxRateModal'

const defaultValues = {
	'tax-provider': '0',
	'calc-automatic': true,
	'apply-tax': true,
}

const TaxDetails = () => {
	const [newTaxRateOpened, setNewTaxRateOpened] = useToggle()
	const { control } = useForm({
		defaultValues,
	})

	return (
		<Paper shadow="xs" p="xl" className="h-full">
			<PageTitle
				title="Details"
				size="sm"
				action={
					<Button
						variant="outline"
						color="gray"
						size="xs"
						leftIcon={<Plus size={16} />}
						onClick={() => setNewTaxRateOpened(true)}
					>
						New task rate
					</Button>
				}
			/>
			<Table
				minHeight={82}
				records={[{ id: 1, name: 'Default', code: null, rate: 0 }]}
				columns={TAX_DETAIL_COLUMNS}
				className="mb-6 mt-8"
			/>
			<Title order={2} className="mb-4 text-lg font-semibold">
				Tax Calculation Settings
			</Title>
			<form>
				<Flex direction="column" gap={16}>
					<Select
						control={control}
						name="tax-provider"
						label="Tax provider"
						data={[
							{ value: '0', label: 'System Tax Provider' },
							{ value: '1', label: 'Company Tax Provider' },
						]}
						className="mb-4"
					/>
					<Checkbox
						control={control}
						name="calc-automatic"
						label="Calculate taxes automatically?"
						rightIcon={
							<Tooltip
								width={240}
								label={`When checked ${APP_NAME} will automatically apply tax calculations to Carts in this Region. When unchecked you will have to manually compute taxes at checkout. Manual taxes are recommended if using a 3rd party tax provider to avoid performing too many requests`}
								multiline
							>
								<Info size={18} className="text-gray-500" />
							</Tooltip>
						}
					/>
					<Checkbox
						control={control}
						name="apply-tax"
						label="Apply tax to gift cards?"
						rightIcon={
							<Tooltip
								width={240}
								label="When checked taxes will be applied to gift cards on checkout. In some countries tax regulations require that taxes are applied to gift cards on purchase."
								multiline
							>
								<Info size={18} className="text-gray-500" />
							</Tooltip>
						}
					/>
				</Flex>
			</form>
			<NewTaxRateModal
				opened={newTaxRateOpened}
				onClose={setNewTaxRateOpened}
			/>
		</Paper>
	)
}

export default TaxDetails
