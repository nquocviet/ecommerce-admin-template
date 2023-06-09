import React, { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { ActionIcon, Button, Flex, Grid, Text, Tooltip } from '@mantine/core'
import { Info, Plus, Trash } from '@phosphor-icons/react'

import { Modal, TextInput } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { useCollectionDetails } from '@/lib/collection'

const EditCollectionModal = (props: ModalOpenedProps) => {
	const { data } = useCollectionDetails()
	const { control, reset } = useForm()
	const {
		fields: metadata,
		append,
		remove,
	} = useFieldArray({
		control,
		name: 'metadata',
	})

	useEffect(() => {
		if (!data) return

		const { title, handle, metadata } = data

		reset({
			title,
			handle,
			metadata: metadata
				? Object.entries(metadata).map(([key, value]) => ({
						key,
						value,
				  }))
				: {},
		})
	}, [data, reset])

	return (
		<Modal
			title="Edit collection"
			size="xl"
			confirmText="Save collection"
			{...props}
		>
			<form>
				<Text className="text-sm text-gray-600">
					To create a collection, all you need is a title and a handle.
				</Text>
				<Text className="mt-6 mb-3 text-sm font-semibold">Details</Text>
				<Grid>
					<Grid.Col span={6}>
						<TextInput
							name="title"
							control={control}
							label="Title"
							placeholder="Sunglasses"
							required
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							name="handle"
							control={control}
							label={
								<Flex align="center" gap={6}>
									Handle
									<Tooltip
										width={240}
										label="URL Slug for the collection. Will be auto generated if left blank."
										multiline
									>
										<Info size={16} className="text-gray-600" />
									</Tooltip>
								</Flex>
							}
							placeholder="sunglasses"
							textIcon="/"
						/>
					</Grid.Col>
				</Grid>
				<Text className="mt-6 mb-3 text-sm font-semibold">Metadata</Text>
				<Flex direction="column" align="stretch" gap={24}>
					<Flex direction="column" align="stretch" gap={16}>
						{metadata.map((field, index) => (
							<Grid key={field.id}>
								<Grid.Col span={4}>
									<TextInput
										control={control}
										name={`metadata.${index}.key`}
										label="Key"
										placeholder="Some key"
									/>
								</Grid.Col>
								<Grid.Col span={8}>
									<Flex align="flex-end" gap={12}>
										<TextInput
											control={control}
											name={`metadata.${index}.value`}
											label="Value"
											placeholder="Some value"
											className="grow"
										/>
										<ActionIcon
											color="gray"
											variant="outline"
											size="lg"
											onClick={() => remove(index)}
										>
											<Trash size={20} />
										</ActionIcon>
									</Flex>
								</Grid.Col>
							</Grid>
						))}
						<Button
							color="gray"
							variant="outline"
							leftIcon={<Plus size={16} />}
							onClick={() => append({ key: '', value: '' })}
						>
							Add metadata
						</Button>
					</Flex>
				</Flex>
			</form>
		</Modal>
	)
}

export default EditCollectionModal
