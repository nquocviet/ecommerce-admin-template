import React from 'react'
import { Flex, Text } from '@mantine/core'
import { DownloadSimple, File } from '@phosphor-icons/react'

import { DropzoneCSV, Modal } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { STORE_NAME } from '@/constants/common'

const ImportProductModal = (props: ModalOpenedProps) => {
	return (
		<Modal
			title="Import products list"
			size="xl"
			confirmText="Import list"
			{...props}
		>
			<Text className="font-semibold">Import products list</Text>
			<Text className="text-gray-600">
				Through imports you can add or update products. To update existing
				products/variants you must set an existing id in the Product/Variant id
				columns. If the value is unset a new record will be created. You will be
				asked for confirmation before we import products.
			</Text>
			<DropzoneCSV
				onDrop={(files) => console.log('accepted files', files)}
				className="mt-6 mb-8"
			/>
			<Text className="font-semibold">
				Unsure about how to arrange your list?
			</Text>
			<Text className="text-gray-600">
				Download the template below to ensure you are following the correct
				format.
			</Text>
			<Flex className="mt-6 flex items-center justify-between rounded-xl border border-solid border-gray-200 py-6 pl-4 pr-6">
				<Flex align="center" gap={12}>
					<File size={28} className="text-primary-700" />
					<div className="text-sm text-gray-600">
						<Text className="font-medium">
							{STORE_NAME.toLowerCase()}-template.csv
						</Text>
						<Text>2.90 KiB</Text>
					</div>
				</Flex>
				<DownloadSimple size={20} className="text-gray-600" />
			</Flex>
		</Modal>
	)
}

export default ImportProductModal
