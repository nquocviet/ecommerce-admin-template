import React from 'react'
import { ActionIcon, Flex, Menu, Paper, Text } from '@mantine/core'
import { DotsThree, NotePencil } from '@phosphor-icons/react'

import { PageTitle } from '@/components'
import { useProductDetails } from '@/lib/product'
import { getValue } from '@/utils'

const ProductAttributes = () => {
	const { data } = useProductDetails()

	return (
		<Paper shadow="xs" p="xl">
			<PageTitle
				order={2}
				size="sm"
				title="Attributes"
				action={
					<Menu shadow="md" width={200}>
						<Menu.Target>
							<ActionIcon>
								<DotsThree size={20} weight="bold" />
							</ActionIcon>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item icon={<NotePencil size={20} />}>
								Edit attributes
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				}
			/>
			<div className="mt-4 text-sm text-gray-600">
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={12}>
						<Text className="font-semibold text-black">Dimensions</Text>
						<Flex justify="space-between">
							<Text>Height</Text>
							<Text>{getValue(data?.height)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Width</Text>
							<Text>{getValue(data?.width)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Length</Text>
							<Text>{getValue(data?.length)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Weight</Text>
							<Text>{getValue(data?.weight)}</Text>
						</Flex>
					</Flex>
					<Flex direction="column" align="stretch" gap={12}>
						<Text className="font-semibold text-black">Customs</Text>
						<Flex justify="space-between">
							<Text>MID Code</Text>
							<Text>{getValue(data?.mid_code)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>HS Code</Text>
							<Text>{getValue(data?.hs_code)}</Text>
						</Flex>
						<Flex justify="space-between">
							<Text>Country of origin</Text>
							<Text>{getValue(data?.origin_country)}</Text>
						</Flex>
					</Flex>
				</Flex>
			</div>
		</Paper>
	)
}

export default ProductAttributes
